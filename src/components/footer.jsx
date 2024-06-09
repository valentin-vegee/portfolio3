const FooterPage = () => {
  return (
    <div className="footer">
      <h2>Contact</h2>
      <div className="info_contacte">
        <div className="info_block">
          <h5>Téléphone</h5>
          <img
            className="img_contacte"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCBUF6tQOqVRr2El7qCdyUiFrZCJB8Zp6iQ&usqp=CAU"
            alt=""
          />
          <p className="text_contacte">+33.6.06.06.06.06</p>
        </div>
        <div className="info_block">
          <h5>Mail</h5>
          <img
            className="img_contacte"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="text_contacte">exemple@gmail.com</p>
        </div>
        <div className="info_block">
          <h5>GitHub</h5>
          <img
            className="img_contacte"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAeFBMVEX///9ca8Baab9VZb5OX7xLXbtUZL5QYb1JW7tNXrxYZ7/09frJzehzf8e5vuG8weJreMXT1uyYoNSnrtrw8fhkcsPh4/Lp6/VfbsHm6PShqNivtd3Y2+55hMn4+PzR1OuDjc2UnNOqsduNltB+ictndcN3gsnBxuTxp/1rAAANAUlEQVR4nO1d6XayOhQtgRCIoqh1pg5Vv77/G15ArSAJ2QlD6Fp3/3Zgk+TM5+Tjox8c1ttkdhxnOM6S1fbz0NMfd43tcbK7RCSgoccK8EJKeXTZTY5b209ojNFxf1kGHvNdTogjACHc9ZlHl5f98dP202piNbkQynwu4lUlyn1GyWWysv3UINaTE/N8Lly0Wpaed5qubT+9CsnOoeDCCcB9utkltjnIkZwZczVXrrKSLmPzQXJc7Vymuy8lHDlzd0MTrtMbbbp2JY4ujae2Ob2wnYd+i+weHFk4H4bISa7UWKrUgwdX+6dxHIetL94LJIyPduktWYf0corebWyN3rFzeneK8cwKvVXU5eYsUQy/+tcao0vQE72cYnDu2b3adyU5ZeDhpEd6yYb1Sy8DW/bmbsz73J0vkGDeC70Zd23Qy+CTHhT/mVpZvju6X8TtxrdHL4O/6VRj7O2cviJI0KE4PVkQnlV4p47orZ2edZ8M3OnEjxrblC5lENqBAb4IbNMqIli0ze8yiOP3Aju1yy+yrB2q8KMW6Y02AxEvRfDNqC1+6zYDZu2BuC0J020ffrsJCGvFqln15bjrg4QteFCr4ai/KghtzHDQ/FpguB3u/ryDhI0kzedQ5UsBrEF2+NBOuqhbEGIecLv9AX6pxr+Z8rtaC77ogX+Z8ZsPzL6WgxlFaiah7efGYRIVTgbl/6kQaMcTR39AQRRAmK5rEf8pfinDWI/fXOHgEiIuz+oK6v/ztQTNkdb/Hd3EN596LdWN1INw5lH/Fm8UVnGgkew+1B9Awu4f2/7MN61Wjwj+yqeb+fjh9qmeCrdovuojFO7u9dH1JA664khcGk0KtvS8/rFwfT9RaHiv7KKsF24XIpcwvih7ColX/w0GasPP+gOYvtjKV8ax1zJF4sXV4K5qqwSYYxEpfoaL5NWs1ZIEEkaiygrFHnUIFEqcqkxQJhZXs9ZWkbBYbJiMlY8GFLgdlI8ZyKTVmNRrT/JE/e/7jizzMFIcnnRjqyXpRRXjJUv5l0XFF3lldqrKqEeWcRz9i26E0bxGPavmrnyc073895eql88vKn6J6iWJj+ATo1NBHefF2Cw6L6bHZP1mK35uk/Fkd4nDrLS78BV6qjMqVYfQcajK6la+I8ev3+cz4t65eTSa/yRKG3iUTOcRfRR5+6TeHJkoUyR1+yuDUsKkB1n1juaBH5LzVCuet5qe3dBXlhjMgMerf/+Axg6VyiaZGIXy1hOlU7dWO+HEr/uBBZAloyYP3xaUEiLd5jW50QPgxQvsmB6BlE5TuaqYA2E0YhykawNL9QOWfIEyPpEwDPnXJ6F3qMzIHIFMdCML6BDDIGQ7+EIIypZQaQj9FYKyU7iAAtmYxd4VoC0qE6QKd/JJ0KqQwbIlz5hKGWoz6P5lq2oCjI74It/eAb25oSv6fBU21a/OsB2ammoWO4oAU+0OrxoQOKG1PsxOm0YOwNi+g5/evwop+Rx+jUPaNfZwRVkl/oR/Ve00dwdluEG+DKiIUfkj3QKPvxKn/E1VTLUIz1o/+ErnKcvOpTrY8YL7bYkfaGvd8RY60om929ujWk9ZsmZg8ZuBWmsfnoJ6PkdJnensUCb1J7vHTmMhSntUo4natCilHVzxlSieJA0ZSrg9dhk0cpEFaf+NSyf9eo12oVHdUpD2eEmFXqq/C0BxlRyvwgssVpF/x/IGzYCXd9Bn8EmZdvuFZ6+n/RdjWGCw59PCSsJuPOYJLC7jFBQFEk3NocxN9YIE9XqfmSb4CNqN+b4AL+HjEB7RIyiIA1gB/MCPagJUC6pyi/1hAy6hf9eEV/Tjfc4iqAUafiCn/OOoEyLNafSOEWjO3F0mVWHT76evtnm9gKUoUimThZ5QX1BRfNArwCj83SecgDKGDmj+4BrcdbnYQO0YQTTcHsAgYG7L/NP47GBwBudCZqYJ6M37P7ZJFTHFU2EHcDvbi4aKsAIlI03PK+h91BRnWAC8LOuPBHsXhNjmVAZ4sFiCert2aw+qAD2K1OcFdabNnJIIYDozVYSgL8EthntFALW3+63xyUFhB67LHM0p2szrioBuvMvHCdTzAyMIuoSpRwhaan+V4Bcqb4dG8BskGKGt5P7AhAyY7CW3jw30QcdtfYhSM4BS1FmiBP+oHky9WOxzDj/bplQG6BA6DkzwZJtSGaB2SwmCW3QoYfsn0PD9BujluRMcVEgGDsqQJZzd9WxTKgPMMJH4I8I+OTCPHs2IpYoezUx4g7ogAa1aI9ePC0hQ0thqCWjWnVxghTIsYxTNL6XqewcSHJamRytjUwNsj6Y/Ncd9dAtQuTnuHo0RW24neAMaFs1SYnjCe0ChbTCYm4tGNAjuuIPJYGuU0Ker8olWnQzJ3EaVd95wDJfvDchYg4vrMsGB1mSo+8t7A1yBnbsIcE+PvDe2b8DFdfmxgmv1h5Nggst+80jSD9zU4w1kj8JKwmFZWhrWE4NJ08PxmLvuRqYDPBDappYDNmMcJ8i/AIvRgdQCoVVAThYVzYCv+DDEDF60/fCANN4IG0AtyQ/e/fKoj9RoWhtCbA0/Ub+lLxqTUpGxV91CNdWuiKdQRIsTHbvtnzkUYxfLD/usDMH7d1PbwHLkApeIhTASbhk4tlsLZlodhL+PqtEaa1lVaA3CfNklsEORwabjq9E+WHpQOPCUg9lrUtaa/F2wu9C69AcCSy1aP3qPWazB1pzJbKdLcqY3+bsUyNVRFNl3AwshRN3J5qVcA1rF/suwf2Vx1L04j5bGwuhevECCns3uie5k+rfRTGjzxAu01xDUXPtmgbc4NdoNVACLeutl+oz1byZ777TSMLifIH119E4Nbg6qdFrhjcpFhtce2n3WkcnFHqzy8o1mgXPadQnbYWd07ahgspos/st94azhJ3x0PLkZvQU1u3dGUDsonFpFvOV5P1lcHPnMfuKzRUcbdT0PTK89FM1MF7gU5Pfm4vVkKZ2/Tdzg0kH78vhqfqG40OMRtKeXFnoWy48pZ3zXqm1zPLMmFwSEwoepWtxvFXjTmiHqxPXc87iVaqj19BSyRldWSgomBJqClYtjRrVXgRLOaLwbN5oMuJqeCfWbXshZ1RF3CCKO73PZzwqdRFwWsuvuZ6Vt5ayP+3P8HCjeELLorShm7L31LO3U8RuSsmTUi67wWiY3EnisFW4Z5PF3UdDY3ZQPLDw3SsffmGi6a7V4H4pXgNBeI7QcCr1gqlcvcqMzbkv5zzVvVlwh5ccl6Qj5jrr9hvCEEfU/143cOIrdLr4pMoTcf92u+3VrV62FtXWfkk4mUmII5D/0G2XQTg8VFNXzW8mL5KVhR8pNKh6TXItDS7cBBorK5LPkRfpFSbNS7SeTRqB2llCZHJKmp0p33KtCzCZzL7ZtqArgfjDZnSHlC3GiWmvKrIukjRsBkQStTGCXXJBDbSWA2ewgzeizCFBZslRg06LTV3sFsdkobp0BtxIE0B9/yzZpSYOu5bMITAcENiaIWk8yLVC2gUZL2ZYyzSAahC5LgO8ZkCnD9yKSsyTgxQxDbU0VBbZBM+wlm/TdkUxu1ZNIfBoZ5p708rDVp9NoXZFcIVkd3jiOqFsQqNynm29jl15rlHIFWrN5DxIJIrjefj05pd4tSxEGy/O0ScCikRjVuQL0Q5ptlFSMjlbJbLZqfE0D3AAggm7WWaIraJcZJXxSbRX6gk1csdHpWBmNStfKcxmM7RNX9dEOR3CaEzSqgvwUhnmJ212rqzFBor5RTwSxoOHdzfk1Jmha1iKene+eWmVVgClB89sFFkLF5Hc1h9OQoNcgCSuO1LtxN8rCjCBr1M1xEpqHRJbdaAYjgv6p2Z9exQzDUwdZXROCzc/Ll9jE58G8dYoGBP0WBvZJGKYUTy1vVH2CbfBLGcr8UM7odf92lfBnMpkTQ1tAm2Bb8vwk99OIz6gfnc673WIxv3wtw5D5XHobuAK6xjY7tcNPldclhHPuui7nD9fXdHCJJkHWYofDQiv30w/BdssdpzoFVX0QJEHLTUZJiDM09YpHuEdPxJUwTbB24OKO7gly0sU1ll9o0CvsmiDraB7vAjyIZu4nHHQiQWc1nEcP2qamK4gR5F1eQjr6h2zTTlew61LxPbBNTQkCl9CSoPPGqa00qfQiaCji1Cvob/pouVHKGlOCqhUkQU+9Gqtb/Un0uiHIbv3NrpvUVht3QpDTXkcuHS41+9R0SmDNxQmEXvq+M2gVSR+ndYKExTY6FscbSaWFKcGtmCBhjq1bAadcSLFVgoRZnXc2JQKKLRK0TC/DT7VjJDQ9g+9SlLCN9dkZKWZfb0rDeApimSCn/4Yy03Q79wo71fym10ItJ2F0PqiZtD8RfVRmcG6cIj08Gl6IS6Mh7M0y1vslZT4Lrg008meU/UToLLqISLSA1XjarLMn3e0/k58Bzfn8H//jf/wPBf4D4h3HJS1YhG8AAAAASUVORK5CYII="
            alt=""
          />
          <p className="text_contacte">valentin-vegee</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;