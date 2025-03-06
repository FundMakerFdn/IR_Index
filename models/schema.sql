-- Protocols table  
CREATE TABLE protocols (  
    id SERIAL PRIMARY KEY,  
    name VARCHAR(50) NOT NULL,  
    chain VARCHAR(20) NOT NULL, -- e.g., Ethereum, Arbitrum  
    tvl NUMERIC,                -- Total Value Locked (TVL)  
    is_eligible BOOLEAN DEFAULT TRUE,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);  

-- Stablecoin Assets table  
CREATE TABLE assets (  
    id SERIAL PRIMARY KEY,  
    name VARCHAR(10) NOT NULL, -- e.g., USDT, USDC  
    market_capitalization NUMERIC,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);  

-- Lending Rates table  
CREATE TABLE lending_rates (  
    id SERIAL PRIMARY KEY,  
    protocol_id INT REFERENCES protocols(id) ON DELETE CASCADE,  
    asset_id INT REFERENCES assets(id) ON DELETE CASCADE,  
    lending_rate NUMERIC NOT NULL,    -- Lending rate (APY)  
    total_lent NUMERIC NOT NULL,      -- Total amount lent  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);  