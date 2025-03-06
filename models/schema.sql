-- Protocols Table (DeFi platforms)  
CREATE TABLE protocols (  
  id SERIAL PRIMARY KEY,  
  name VARCHAR(50) NOT NULL,  
  chain VARCHAR(20) NOT NULL,  -- e.g., Ethereum, Arbitrum  
  tvl NUMERIC, -- Total Value Locked (TVL)  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

-- Assets Table (supported cryptocurrencies)  
CREATE TABLE assets (  
  id SERIAL PRIMARY KEY,  
  name VARCHAR(10) NOT NULL UNIQUE, -- e.g., USDT, USDC, DAI  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

-- Lending Data Table (stores lending rates and stablecoin activity)  
CREATE TABLE lending_rates (  
  id SERIAL PRIMARY KEY,  
  protocol_id INT REFERENCES protocols(id),  
  asset_id INT REFERENCES assets(id),  
  lending_rate NUMERIC NOT NULL, -- APY for the asset  
  total_lent NUMERIC NOT NULL, -- Total stablecoins lent  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);