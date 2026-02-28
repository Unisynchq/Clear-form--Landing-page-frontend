require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { z } = require("zod");

const app = express();
const port = process.env.PORT || 8005;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Zod Schema for validation
const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
  ageRange: z.string().optional().nullable(),
});

// Routes
app.post("/api/leads", async (req, res) => {
  try {
    // 1. Validate incoming data
    const validatedData = leadSchema.parse(req.body);

    // 2. Insert into Neon DB
    const query = `
      INSERT INTO leads (name, phone, email, location, age_range)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [
      validatedData.name,
      validatedData.phone,
      validatedData.email,
      validatedData.location,
      validatedData.ageRange || null,
    ];

    const result = await pool.query(query, values);

    // 3. Send success response
    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error("Database error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/leads/export", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");
    
    if (result.rows.length === 0) {
      return res.status(404).send("No leads found to export.");
    }

    // CSV Header
    const fields = Object.keys(result.rows[0]);
    let csv = fields.join(",") + "\n";

    // CSV Rows
    result.rows.forEach(row => {
      let rowString = fields.map(field => {
        let val = row[field];
        if (val === null || val === undefined) val = "";
        
        // Escape quotes
        val = val.toString().replace(/"/g, '""');
        
        // Wrap in quotes if it contains comma, quote, or newline
        if (val.includes(',') || val.includes('"') || val.includes('\\n')) {
          val = `"${val}"`;
        }
        return val;
      }).join(",");
      csv += rowString + "\n";
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; file_name=leads.csv");
    res.status(200).send(csv);
  } catch (error) {
    console.error("Error exporting leads:", error);
    res.status(500).json({ error: "Internal server error during export." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
