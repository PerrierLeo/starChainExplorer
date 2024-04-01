import { ethers } from 'ethers';
import { Escrow } from '../../typechain-types';

const provider = new ethers.BrowserProvider(window.ethereum);

export default async function addContract(
    id: string,
    contract: Escrow,
    arbiter: string,
    beneficiary: string,
    value: any
) {

    try {
        const signer = await provider.getSigner();
        await contract.connect(signer).approve();
    } catch (e) {
        console.log(e);
    }

    // contract.on('Approved', () => {
    //     // document.getElementById(buttonId).className = 'complete';
    //     // document.getElementById(buttonId).innerText = "✓ It's been approved!";
    // });


}