<template>
  <div class="coding-challenge">
    <h2>Options Strategy Risk & Reward Analysis</h2>
    <div class="graph-container">
      <canvas ref="strategyGraph"></canvas>
    </div>
    <div class="strategy-details">
      <h3>Strategy Details</h3>
      <ul>
        <li v-for="(option, index) in optionsData" :key="index">
          Strike Price: {{ option.strikePrice }}, Type: {{ option.type }},
          Bid: {{ option.bid }}, Ask: {{ option.ask }}, Long/Short: {{ option.longShort }}
        </li>
      </ul>
      <p><strong>Max Profit:</strong> {{ maxProfit }}</p>
      <p><strong>Max Loss:</strong> {{ maxLoss }}</p>
      <p><strong>Break Even Points:</strong></p>
      <ul>
        <li v-for="(breakEven, index) in breakEvenPoints" :key="index">
          {{ breakEven }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodingChallenge',
  props: {
    optionsData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      maxProfit: 0,
      maxLoss: 0,
      breakEvenPoints: []
    };
  },
  mounted() {
    this.calculateRiskReward();
  },
  methods: {
    calculateRiskReward() {
      let totalPremiumReceived = 0;
      let totalPremiumPaid = 0;

      this.optionsData.forEach(option => {
        if (option.longShort === 'long') {
          totalPremiumPaid += option.ask;
        } else if (option.longShort === 'short') {
          totalPremiumReceived += option.bid;
        }
      });

      this.maxProfit = totalPremiumReceived;
      this.maxLoss = totalPremiumPaid;

      this.breakEvenPoints = [
        this.optionsData[0].strikePrice - this.optionsData[0].ask,
        this.optionsData[0].strikePrice + this.optionsData[0].bid
      ];

      this.renderGraph();
    },
    renderGraph() {
      const canvas = this.$refs.strategyGraph;
      const ctx = canvas.getContext('2d');

      const data = this.calculateProfitLoss();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      data.forEach((point, index) => {
        const x = (index + 1) * (canvas.width / data.length);
        const y = canvas.height / 2 - point * 10;
        ctx.lineTo(x, y);
      });
      ctx.stroke();
    },
    calculateProfitLoss() {
      const underlyingPrices = [100, 110, 120, 130];
      const profitLoss = [];

      underlyingPrices.forEach(price => {
        const profit = price - 105;
        profitLoss.push(profit);
      });

      return profitLoss;
    }
  }
};
</script>

<style scoped>
.coding-challenge {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.graph-container {
  margin-bottom: 20px;
}

.strategy-details {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  margin-top: 20px;
}

.strategy-details h3 {
  margin-bottom: 10px;
}
</style>
