import React from "react";
import { connect } from "react-redux";
import "./styles.css";

function logo() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 280 360"
        width="280"
        height="360"
        class="logo"
        alt="Purrfect Match logo"
      >
        <path d="M261.4 107L263.2 109.4 264.9 111.9 266.5 114.4 268.1 117.1 269.5 119.8 270.9 122.6 272.2 125.4 273.4 128.4 274.5 131.4 275.5 134.4 276.4 137.5 277.3 140.7 278 143.9 278.6 147.1 279.1 150.4 279.5 153.8 279.8 157.2 279.9 160.6 280 164.1 279.7 173.6 279 182.9 277.8 191.9 276.1 200.7 274 209.3 271.5 217.6 268.6 225.7 265.4 233.5 261.9 241.1 258.1 248.4 254.1 255.6 249.8 262.4 245.3 269.1 240.6 275.5 235.7 281.6 230.7 287.6 225.6 293.3 220.5 298.7 215.3 303.9 210 308.9 204.8 313.7 199.5 318.2 194.4 322.5 189.3 326.5 184.3 330.4 179.5 333.9 174.8 337.3 170.2 340.4 165.9 343.3 161.9 346 158.1 348.4 154.6 350.6 151.4 352.6 148.5 354.3 146 355.8 143.9 357.1 142.3 358.2 141 359 140.3 359.6 140 360 139.8 359.6 139 359 137.8 358.2 136.1 357.1 134 355.8 131.5 354.3 128.6 352.6 125.4 350.6 121.9 348.4 118.1 346 114.1 343.3 109.8 340.4 105.3 337.3 100.6 333.9 95.7 330.4 90.7 326.5 85.6 322.5 80.5 318.2 75.3 313.7 70 308.9 64.8 303.9 59.5 298.7 54.4 293.3 49.3 287.6 44.3 281.6 39.5 275.5 34.8 269.1 30.2 262.4 25.9 255.6 21.9 248.4 18.1 241.1 14.6 233.5 11.4 225.7 8.5 217.6 6 209.3 3.9 200.7 2.2 191.9 1 182.9 0.3 173.6 0 164.1 0.1 160.6 0.2 157.2 0.5 153.8 0.9 150.4 1.4 147.1 2 143.9 2.8 140.7 3.6 137.5 4.5 134.4 5.5 131.4 6.6 128.4 7.8 125.4 9.1 122.6 10.5 119.8 12 117.1 13.5 114.4 15.1 111.9 16.9 109.4 18.6 107 20 105.3 20 0 89 82.8 89.5 82.9 92.1 83.8 94.7 84.8 97.3 85.9 99.7 87.1 102.2 88.4 104.6 89.8 106.9 91.3 109.1 92.9 111.3 94.6 113.5 96.4 115.6 98.3 117.6 100.2 119.5 102.3 121.4 104.4 123.2 106.7 124.9 109 126.5 111.4 128.1 113.9 129.5 116.4 130.9 119.1 132.2 121.8 133.4 124.6 134.5 127.4 135.5 130.3 136.4 133.3 137.3 136.4 138 139.5 138.6 142.7 139.1 145.9 139.5 149.2 139.8 152.6 139.9 156 140 159.4 140.1 156 140.2 152.6 140.5 149.2 140.9 145.9 141.4 142.7 142 139.5 142.8 136.4 143.6 133.3 144.5 130.3 145.5 127.4 146.6 124.6 147.8 121.8 149.1 119.1 150.5 116.4 152 113.9 153.5 111.4 155.1 109 156.9 106.7 158.6 104.5 160.5 102.3 162.4 100.2 164.4 98.3 166.5 96.4 168.7 94.6 170.9 92.9 173.1 91.3 175.5 89.8 177.8 88.4 180.3 87.1 182.8 85.9 185.3 84.8 187.9 83.8 190.5 82.9 191 82.8 260 0 260 105.3 261.4 107ZM192.7 252.2L191.4 253.2 190.2 254.1 188.9 255 187.6 255.8 186.3 256.6 184.9 257.3 183.5 258 182.1 258.5 180.7 259.1 179.3 259.6 177.9 260 176.4 260.4 174.9 260.7 173.5 260.9 172 261.1 170.5 261.3 169 261.4 167.5 261.4 166 261.4 164.5 261.3 163 261.1 161.6 260.9 160.1 260.7 158.6 260.4 157.2 260 155.7 259.6 154.3 259.1 152.9 258.5 151.5 258 150.1 257.3 148.7 256.6 147.4 255.8 146.1 255 144.8 254.1 143.6 253.2 142.4 252.2 141.2 251.1 140 250 138.8 251.1 137.7 252.2 136.4 253.2 135.2 254.1 133.9 255 132.6 255.8 131.3 256.6 129.9 257.3 128.5 258 127.1 258.5 125.7 259.1 124.3 259.6 122.9 260 121.4 260.4 119.9 260.7 118.5 260.9 117 261.1 115.5 261.3 114 261.4 112.5 261.4 111 261.4 109.5 261.3 108 261.1 106.6 260.9 105.1 260.7 103.6 260.4 102.2 260 100.7 259.6 99.3 259.1 97.9 258.5 96.5 258 95.1 257.3 93.7 256.6 92.4 255.8 91.1 255 89.8 254.1 88.6 253.2 87.4 252.2 86.2 251.1 85 250 88.2 254 89.2 255.2 90.2 256.3 91.3 257.4 92.4 258.4 93.6 259.4 94.7 260.3 95.9 261.1 97.2 261.9 98.4 262.7 99.7 263.4 101 264 102.3 264.5 103.7 265.1 105 265.5 106.4 265.9 107.8 266.2 109.2 266.5 110.6 266.7 112 266.9 113.5 267 114.9 267.1 116.3 267.1 117.7 267 119.2 266.9 120.6 266.7 122 266.4 123.4 266.1 124.8 265.8 126.2 265.4 127.5 264.9 128.9 264.4 130.2 263.8 131.5 263.1 132.8 262.4 134.1 261.6 135.3 260.8 136.6 259.9 137.7 259 138.9 258 140 256.9 141.1 258 142.3 259 143.5 259.9 144.7 260.8 145.9 261.6 147.2 262.4 148.5 263.1 149.8 263.8 151.1 264.4 152.5 264.9 153.8 265.4 155.2 265.8 156.6 266.1 158 266.4 159.4 266.7 160.8 266.9 162.3 267 163.7 267.1 165.1 267.1 166.5 267 168 266.9 169.4 266.7 170.8 266.5 172.2 266.2 173.6 265.9 175 265.5 176.3 265.1 177.7 264.5 179 264 180.3 263.4 181.6 262.7 182.8 261.9 184.1 261.1 185.3 260.3 186.5 259.4 187.6 258.4 188.7 257.4 189.8 256.3 190.8 255.2 191.8 254 195 250 193.8 251.1 192.7 252.2ZM71.9 144.7L74.1 149.5 75.9 154.5 77.2 159.6 77.9 164.8 78.2 170 77.9 175.2 77.2 180.4 75.9 185.5 74.1 190.5 71.9 195.4 69.1 200 70 200 71.3 200 72.7 199.9 74 199.7 75.3 199.5 76.5 199.3 77.8 199 79 198.6 80.2 198.2 81.4 197.8 82.5 197.3 83.7 196.7 84.8 196.1 85.9 195.5 86.9 194.8 87.9 194.1 88.9 193.3 89.9 192.5 90.8 191.6 91.6 190.8 92.5 189.9 93.3 188.9 94.1 187.9 94.8 186.9 95.5 185.9 96.1 184.8 96.7 183.7 97.3 182.5 97.8 181.4 98.2 180.2 98.6 179 99 177.8 99.3 176.5 99.5 175.3 99.7 174 99.9 172.7 100 171.3 100 170 100 168.7 99.9 167.3 99.7 166 99.5 164.8 99.3 163.5 99 162.2 98.6 161 98.2 159.8 97.8 158.6 97.3 157.5 96.7 156.3 96.1 155.2 95.5 154.2 94.8 153.1 94.1 152.1 93.3 151.1 92.5 150.2 91.6 149.2 90.8 148.4 89.9 147.5 88.9 146.7 87.9 145.9 86.9 145.2 85.9 144.5 84.8 143.9 83.7 143.3 82.5 142.7 81.4 142.2 80.2 141.8 79 141.4 77.8 141 76.5 140.7 75.3 140.5 74 140.3 72.7 140.1 71.3 140 70 140 69.1 140 71.9 144.7ZM211.9 144.7L214.1 149.5 215.9 154.5 217.2 159.6 217.9 164.8 218.2 170 217.9 175.2 217.2 180.4 215.9 185.5 214.1 190.5 211.9 195.4 209.1 200 210 200 211.3 200 212.7 199.9 214 199.7 215.3 199.5 216.5 199.3 217.8 199 219 198.6 220.2 198.2 221.4 197.8 222.5 197.3 223.7 196.7 224.8 196.1 225.9 195.5 226.9 194.8 227.9 194.1 228.9 193.3 229.9 192.5 230.8 191.6 231.6 190.8 232.5 189.9 233.3 188.9 234.1 187.9 234.8 186.9 235.5 185.9 236.1 184.8 236.7 183.7 237.3 182.5 237.8 181.4 238.2 180.2 238.6 179 239 177.8 239.3 176.5 239.5 175.3 239.7 174 239.9 172.7 240 171.3 240 170 240 168.7 239.9 167.3 239.7 166 239.5 164.8 239.3 163.5 239 162.2 238.6 161 238.2 159.8 237.8 158.6 237.3 157.5 236.7 156.3 236.1 155.2 235.5 154.2 234.8 153.1 234.1 152.1 233.3 151.1 232.5 150.2 231.6 149.2 230.8 148.4 229.9 147.5 228.9 146.7 227.9 145.9 226.9 145.2 225.9 144.5 224.8 143.9 223.7 143.3 222.5 142.7 221.4 142.2 220.2 141.8 219 141.4 217.8 141 216.5 140.7 215.3 140.5 214 140.3 212.7 140.1 211.3 140 210 140 209.1 140 211.9 144.7ZM207.3 140.1L206 140.3 204.8 140.5 203.5 140.7 202.2 141 201 141.4 199.8 141.8 198.6 142.2 197.5 142.7 196.3 143.3 195.2 143.9 194.2 144.5 193.1 145.2 192.1 145.9 191.1 146.7 190.2 147.5 189.2 148.4 188.4 149.2 187.5 150.2 186.7 151.1 185.9 152.1 185.2 153.1 184.5 154.2 183.9 155.2 183.3 156.3 182.7 157.5 182.2 158.6 181.8 159.8 181.4 161 181 162.2 180.7 163.5 180.5 164.8 180.3 166 180.1 167.3 180 168.7 180 170 180 171.3 180.1 172.7 180.3 174 180.5 175.3 180.7 176.5 181 177.8 181.4 179 181.8 180.2 182.2 181.4 182.7 182.5 183.3 183.7 183.9 184.8 184.5 185.9 185.2 186.9 185.9 187.9 186.7 188.9 187.5 189.9 188.4 190.8 189.2 191.6 190.2 192.5 191.1 193.3 192.1 194.1 193.1 194.8 194.2 195.5 195.2 196.1 196.3 196.7 197.5 197.3 198.6 197.8 199.8 198.2 201 198.6 202.2 199 203.5 199.3 204.8 199.5 206 199.7 207.3 199.9 208.7 200 209.1 200 206.3 195.4 204 190.5 202.3 185.5 201 180.4 200.3 175.2 200 170 200.3 164.8 201 159.6 202.3 154.5 204 149.5 206.3 144.7 209.1 140 208.7 140 207.3 140.1ZM67.3 140.1L66 140.3 64.8 140.5 63.5 140.7 62.2 141 61 141.4 59.8 141.8 58.6 142.2 57.5 142.7 56.3 143.3 55.2 143.9 54.2 144.5 53.1 145.2 52.1 145.9 51.1 146.7 50.2 147.5 49.2 148.4 48.4 149.2 47.5 150.2 46.7 151.1 45.9 152.1 45.2 153.1 44.5 154.2 43.9 155.2 43.3 156.3 42.7 157.5 42.2 158.6 41.8 159.8 41.4 161 41 162.2 40.7 163.5 40.5 164.8 40.3 166 40.1 167.3 40 168.7 40 170 40 171.3 40.1 172.7 40.3 174 40.5 175.3 40.7 176.5 41 177.8 41.4 179 41.8 180.2 42.2 181.4 42.7 182.5 43.3 183.7 43.9 184.8 44.5 185.9 45.2 186.9 45.9 187.9 46.7 188.9 47.5 189.9 48.4 190.8 49.2 191.6 50.2 192.5 51.1 193.3 52.1 194.1 53.1 194.8 54.2 195.5 55.2 196.1 56.3 196.7 57.5 197.3 58.6 197.8 59.8 198.2 61 198.6 62.2 199 63.5 199.3 64.8 199.5 66 199.7 67.3 199.9 68.7 200 69.1 200 66.3 195.4 64 190.5 62.3 185.5 61 180.4 60.3 175.2 60 170 60.3 164.8 61 159.6 62.3 154.5 64 149.5 66.3 144.7 69.1 140 68.7 140 67.3 140.1ZM80 90L30 30 30 90 80 90ZM250 90L250 30 200 90 250 90Z" />
      </svg>
      <h1 class="title">Purrfect Match</h1>
    </>
  );
}

export default connect(null)(logo);
