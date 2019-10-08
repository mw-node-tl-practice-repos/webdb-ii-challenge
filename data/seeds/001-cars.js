
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '01A1B1C1D1E1F1G1H', Make: 'Jeep', Model: 'Compass', Mileage: 65038},
        {id: 2, VIN: '02A2B2C2D2E2F2G2H', Make: 'VW', Model: 'GTX', Mileage: 67569},
        {id: 3, VIN: '03A3B3C3D3E3F3G3H', Make: 'Toyota', Model: 'Camry', Mileage: 120739},
      ]);
    });
};
