<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th>Percentile (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>6000</td>
      </tr>
      <tr class="active-row">
        <td>Melissa</td>
        <td>5150</td>
        <td>5150</td>
      </tr>
      <!-- and so on... -->
    </tbody>
  </table>
</template>

<style scoped>
.styled-table {
  border-collapse: collapse;
  /* margin: 25px 0; */
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  /* min-width: 400px; */
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
}
.styled-table thead tr {
  background-color: var(--color-primary);
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid var(--color);
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: var(--color);
}
</style>
