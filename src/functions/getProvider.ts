import { ethers } from 'ethers';


export default async function getProvider(): Promise<ethers.BrowserProvider> {
    const provider: ethers.BrowserProvider = new ethers.BrowserProvider(window.ethereum);
    return provider;
}