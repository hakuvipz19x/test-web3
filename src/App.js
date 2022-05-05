import logo from './logo.svg';
import './App.css';

function App() {
  const Web3 = require('web3')
  const ERC20_ABI = require('./ERC20.json')
  const PROVIDER = 'https://kovan.infura.io/v3/bb6b6f6f39434b1da5b19f5853dfd502';
  const WSS_PROVIDER = 'wss://kovan.infura.io/ws/v3/bb6b6f6f39434b1da5b19f5853dfd502';
  const ethereumMulticall = require('ethereum-multicall');

  try {
    (async () => {
      // 1. Khởi tạo web3
      const web3 = new Web3(PROVIDER);
      const wss_web3 = new Web3(WSS_PROVIDER);
      // 2. get eth balance
      const ethBalance = await web3.eth.getBalance('0x5FeC8FD7BB410919A01B31F866bA57619f3303FA')
      console.log(ethBalance)

      // 3. khởi tạo contract weth
      const wethContract = await new web3.eth.Contract(ERC20_ABI, '0xd0A1E359811322d97991E03f863a0C30C2cF029C')
      const wss_wethContract = await new wss_web3.eth.Contract(ERC20_ABI, '0xd0A1E359811322d97991E03f863a0C30C2cF029C')

      // console.log(wethContract.methods)
      // 4. BalanceOf
      const balanceOfAcc = await wethContract.methods.balanceOf('0x5FeC8FD7BB410919A01B31F866bA57619f3303FA').call();
      console.log(balanceOfAcc)

      // const privateKey = '42c634daec9f3f9b81ea6b20e7bbd811639000f07ceac7e33d620f6e81a40c2d';
      // const address = '0x5FeC8FD7BB410919A01B31F866bA57619f3303FA';
      // web3.eth.accounts.wallet.add(privateKey);

      // 5. estimaseGas
      // const estimaseGasWithdraw = await wethContract.methods.withdraw('1').estimateGas({from: address})
      // console.log(estimaseGasWithdraw)

      // 6. Withdraw
      // const withdraw = await wethContract.methods.withdraw('1').send({ from: address, gas: estimaseGasWithdraw })
      // console.log(withdraw)

      // 7. Deposit
      // const estimaseGasDeposit = await wethContract.methods.deposit().estimateGas({ from: address, value: web3.utils.toWei('0.00000001') })
      // console.log(estimaseGasDeposit)
      // const deposit = await wethContract.methods.deposit().send({ from: address, value: web3.utils.toWei('0.00000001'), gas: estimaseGasDeposit })
      // console.log(deposit)

      // 8. block mới nhất
      // const latest = await web3.eth.getBlockNumber()
      // const latestBlock = await web3.eth.getBlock(latest)
      // console.log(latestBlock)

      // const options = {
      //   fromBlock: blockNumberLastest 
      // }
      // 9. get 'transfer' event
      // const pastEvent = await wethContract.getPastEvents('Transfer')
      // console.log(pastEvent)

      // 10. get 'transfer' event realtime
      // wethContract.events.Transfer({

      // }, function (error, event) {
      //   console.log(event)
      // })

      // 11. MultiCall
      // const multicall = new ethereumMulticall.Multicall({ web3Instance: web3, tryAggregate: true});
      // // console.log(multicall)
      // const addressList = ['0xc05c2aaDfAdb5CdD8EE25ec67832B524003B2E37', '0x5FeC8FD7BB410919A01B31F866bA57619f3303FA', '0x3b338e782859aE11c0B15694bc482a9aFa4A5809'];

      // const contractCallContext = addressList.map((address, index) => {
      //   return {
      //     reference: 'user',
      //     contractAddress: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
      //     abi: ERC20_ABI,
      //     calls: [{ reference: 'balance' + index, methodName: 'balanceOf', methodParameters: [address] }]
      //   }
      // })

      // const call = await multicall.call(contractCallContext)
      // console.log(call)
    })();
  } catch (e) {
    console.log(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
