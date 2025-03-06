const pool = require("../config/db");

(async () => {
  try {
    // Add protocols
    await pool.query(`  
      INSERT INTO protocols (name, chain, tvl) VALUES  
        ('Aave', 'Ethereum', 2000000000),  
        ('Compound', 'Ethereum', 1500000000),  
        ('Venus', 'BSC', 1000000000);  
    `);

    // Add assets (stablecoins)
    await pool.query(`  
      INSERT INTO assets (name) VALUES  
        ('USDT'), ('USDC'), ('DAI');  
    `);

    console.log("Mock data loaded successfully!");
    process.exit(); // Exit after loading
  } catch (err) {
    console.error("Error loading mock data:", err);
    process.exit(1); // Exit with error
  }
})();
