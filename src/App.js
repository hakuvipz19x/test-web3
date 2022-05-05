import logo from './logo.svg';
import './App.css';

function App() {
  const Web3 = require('web3')
  const ERC20_ABI = require('./ERC20.json')
  const PROVIDER = 'https://mainnet.infura.io/v3/bb6b6f6f39434b1da5b19f5853dfd502';
  const WSS_PROVIDER = 'wss://mainnet.infura.io/ws/v3/bb6b6f6f39434b1da5b19f5853dfd502';
  const ethereumMulticall = require('ethereum-multicall');

  (async () => {
    // 1. Khởi tạo web3
    const web3 = new Web3(PROVIDER);
    const wss_web3 = new Web3(WSS_PROVIDER);
    // 2. get eth balance
    // const ethBalance = await web3.eth.getBalance('0x25abed8e84800DfC32b3502B0469B99Cec909b5b')
    // console.log(ethBalance)

    // 3. khởi tạo contract weth
    const wethContract = await new web3.eth.Contract(ERC20_ABI, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    const wss_wethContract = await new wss_web3.eth.Contract(ERC20_ABI, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')

    // 4. BalanceOf
    // const balanceOfAcc = await wethContract.methods.balanceOf('0x25abed8e84800DfC32b3502B0469B99Cec909b5b').call();
    // console.log(balanceOfAcc)

    // const privateKey = '42c634daec9f3f9b81ea6b20e7bbd811639000f07ceac7e33d620f6e81a40c2d';
    // const address = '0x5FeC8FD7BB410919A01B31F866bA57619f3303FA';
    // web3.eth.accounts.wallet.add(privateKey);

    // 5. estimaseGas
    // const estimaseGas = await wethContract.methods.withdraw('1000').estimateGas()
    // console.log(estimaseGas)

    // 6. Withdraw
    // const withdraw = await wethContract.methods.withdraw('1000').send({ from: address, gas: estimaseGas })
    // console.log(withdraw)

    // 7. Deposit
    // const estimaseGasDeposit = await wethContract.methods.deposit().estimateGas({ from: address, value: web3.utils.toWei('0.1') })
    // const deposit = await wethContract.methods.deposit().send({ from: address, value: web3.utils.toWei('0.1'), gas: 21064 })
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

    
    // for (let i = latest - 1000; i <= latest; i++) {
    //   const block = await web3.eth.getBlock(i)
    //   console.log(block)
    // }

    // 10. get 'transfer' event realtime
    // wethContract.events.Transfer({

    // }, function (error, event) {
    //   console.log(event)
    // })

    // 11. MultiCall
    // const multicall = new ethereumMulticall.Multicall({ web3Instance: web3, tryAggregate: true});
    // // console.log(multicall)
    // const addressList = ['0x9E523B589b08Ebff834Bd7cd302372A98474751a', '0x128429366f59b598201fE4C4649A168cab558868', '0x35183A19F09c4b59C0b6572803A2922270854cda'];
    
    // const contractCallContext = addressList.map((address, index) => {
    //   return {
    //     reference: 'user',
    //     contractAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    //     abi: ERC20_ABI,
    //     calls: [{ reference: 'balance' + index, methodName: 'balanceOf', methodParameters: [address] }]
    //   }
    // })

    // const result = await multicall.call(contractCallContext)
    // console.log(result)
  })();
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
