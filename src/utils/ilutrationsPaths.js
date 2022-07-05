const focusPath = `            
  <path fill="#FF6363" d="M213.763 73.7686h-13.555v7.0379h13.555v-7.0379zm1.042 8.6019h-13.554v7.038h13.554v-7.038zM203.597 22.678h-13.555v7.038h13.555v-7.038zm9.644 8.0806h-13.554v7.038h13.554v-7.038zm-26.066-7.5593H173.62v7.038h13.555v-7.038zm43.531 15.64h-13.555v7.038h13.555v-7.038zm-16.422.5213h-13.555v7.038h13.555v-7.038zM196.819 31.28h-13.554v7.038h13.554V31.28zm33.105 61.7779h-13.555v7.0381h13.555v-7.0381zm-16.422.5213h-13.555v7.0378h13.555v-7.0378z" opacity=".2"/>
  <path fill="#FF6363" d="M35.2374 71.9439s19.1043 19.1042 8.3205 47.4411c-10.7838 28.337 18.4838 75.5 18.4838 75.5s-.3128-.047-.894-.149c-39.2355-6.926-58.73077-51.8-36.9026-85.126 8.1015-12.4049 14.759-26.9423 10.9923-37.6661z"/>
  <path stroke="#535461" stroke-miterlimit="10" stroke-width="2" d="M35.2374 71.9439s10.7838 23.4183 0 42.5201c-10.7837 19.101-1.8481 72.726 26.807 80.421"/>
  <path fill="#FF6363" d="M1.21002 149.211s21.79948-3.472 23.78578 16.064c1.9863 19.537 41.9204 22.246 41.9204 22.246s-.2607.177-.7481.498c-32.9717 21.635-64.48888 13.786-59.73693-14.952 1.76471-10.685 1.61874-21.417-5.22115-23.856z"/>
  <path fill="#F5F5F5" d="M1.21002 149.211s21.79948-3.472 23.78578 16.064c1.9863 19.537 41.9204 22.246 41.9204 22.246s-.2607.177-.7481.498c-32.9717 21.635-64.48888 13.786-59.73693-14.952 1.76471-10.685 1.61874-21.417-5.22115-23.856z" opacity=".2"/>
  <path stroke="#535461" stroke-miterlimit="10" stroke-width="2" d="M1.21002 149.211s16.91988 3.714 15.53048 19.099c-1.3893 15.384 25.1283 33.837 50.1757 19.211"/>
  <path fill="#FF6363" d="M14.8742 74.0292H1.31952v7.038H14.8742v-7.038zm9.6446 8.0807H10.9642v7.038h13.5546v-7.038zM97.766 0H84.2114v7.03799H97.766V0zm106.873 129.812h-13.554v7.038h13.554v-7.038zM25.5615 90.7119H12.0068v7.038h13.5547v-7.038zM107.411 8.08066H93.856v7.03794h13.555V8.08066zM57.8841 55.7826H44.3295v7.038h13.5546v-7.038zm9.6447 8.0807H53.9741v7.0379h13.5547v-7.0379zm25.8059-4.4314H79.78v7.038h13.5547v-7.038zM68.5714 72.4652H55.0168v7.038h13.5546v-7.038zM222.886 129.812h-13.555v7.038h13.555v-7.038z" opacity=".2"/>
  <path fill="url(#a)" d="M189.004 101.949c-.877-4.8842-1.415-9.8234-1.61-14.7822-.174-4.0838-1.606-8.014-4.101-11.2518s-5.93-5.6246-9.835-6.8332c-1.423-.4379-2.99-.8472-4.72-1.2147-15.171-3.2219-19.78-.4093-20.304-.0391-.443-.8066-.829-1.6437-1.154-2.505-.026-.0886-.05-.1773-.076-.2607 3.003-3.2019 4.832-7.3265 5.19-11.7013 2.531-2.565 4.009-5.6617 4.009-8.9956 0-2.8673-1.095-5.5574-3.011-7.8852v-4.5303c0-5.2244-2.075-10.2348-5.769-13.929-3.695-3.6942-8.705-5.7696-13.929-5.7696h-1.598c-2.587 0-5.149.5095-7.539 1.4995-2.389.9899-4.561 2.4409-6.39 4.2701-1.829 1.8292-3.28 4.0007-4.27 6.3907-.99 2.3899-1.5 4.9514-1.5 7.5383v4.8822c-1.738 2.2444-2.724 4.8067-2.724 7.5281 0 3.2635 1.418 6.2977 3.853 8.8314.333 4.5351 2.246 8.8097 5.406 12.0792.107.7403.216 1.5354.323 2.3747L92.12 73.3776s-10.4631.4301-17.204 14.3366c-5.7007 11.7795-17.0449 42.0428-20.4049 51.0518-.6074 1.631-.9515 2.567-.9515 2.567s.1121-.112.3233-.305l-.3233.879s.1643-.167.4771-.441c-.4745 3.769-.5422 10.242 4.3948 11.047 4.1394.675 14.8058.954 22.863 1.066h.5579c5.341.071 9.4048.071 9.4048.071v-.071h86.6558v-.888c.001-.807-.161-1.605-.477-2.346l.12-.146c.464.612.772 1.327.899 2.085-.01.074-.024.147-.041.219l.052-.133c.02.237.002.475-.052.706 0 0 11.117-28.644 10.997-45.749.032-1.802-.104-3.602-.407-5.378zm-69.298-30.4326c-.143-.8171-.236-1.6424-.276-2.4711v-.0235c.096.8055.19 1.6396.276 2.4946zM86.023 133.044v6.827l-4.2749.915 4.2749-7.742z"/>
  <path fill="#E14B5A" d="M132.456 15.0066c5.224 0 10.234 2.0753 13.928 5.7695 3.695 3.6942 5.77 8.7046 5.77 13.929v8.4039h-39.397v-8.4039c0-5.2244 2.075-10.2348 5.77-13.929 3.694-3.6942 8.704-5.7695 13.929-5.7695z"/>
  <path fill="#E14B5A" d="M132.594 61.2931c12.401 0 22.453-6.9078 22.453-15.4289s-10.052-15.4288-22.453-15.4288-22.454 6.9077-22.454 15.4288 10.053 15.4289 22.454 15.4289z"/>
  <path fill="#F7C4A7" d="M118.2 60.8109s4.692 24.5208 0 31.1339c-4.692 6.6131 14.336 9.2302 14.336 9.2302l19.696-7.1631 2.756-17.6341s-11.991-6.7512-9.507-20.3893L118.2 60.8109zm58.134 82.6571s1.24 5.372-5.511 6.337c-3.986.586-8.04.538-12.011-.143l-1.489-13.495h15.705l3.306 7.301zm-119.2137-6.876s-2.982 12.118 3.7693 13.213c6.7512 1.095 31.5406 1.103 31.5406 1.103v-14.337l-11.2243 2.398-10.5361-10.103-13.5495 7.726z"/>
  <path d="m119.649 68.7325-26.3821 5.5782s-10.0565.4145-16.5314 13.7763c-6.475 13.362-20.5275 51.523-20.5275 51.523s11.9907-12.123 26.038.827l9.3683-16.944-2.0671 26.865h72.5908v-12.677s15.152 8.128 14.052 12.674c0 0 12.968-33.412 10.166-48.596-.843-4.6941-1.361-9.4409-1.548-14.2064-.166-3.9249-1.542-7.7024-3.94-10.8139-2.398-3.1116-5.7-5.4048-9.453-6.5647-1.366-.4197-2.868-.8133-4.536-1.1652-15.567-3.3053-19.55 0-19.55 0s-3.016 9.8115-2.961 14.2584c.068 5.7165-8.128 9.5065-8.128 9.5065s-12.123-2.8934-12.673-5.2341c-.55-2.3408-4.888-16.0519-3.918-18.8071z" opacity=".1"/>
  <path fill="#575988" d="m119.649 68.1825-26.3821 5.5783s-10.0565.4144-16.5314 13.7762c-6.475 13.362-20.5301 51.528-20.5301 51.528s11.9906-12.123 26.0379.827l9.3684-16.944-2.0671 26.857h72.5934v-12.674s15.152 8.128 14.052 12.674c0 0 12.968-33.412 10.166-48.596-.843-4.6941-1.361-9.4409-1.548-14.2064-.166-3.9249-1.542-7.7024-3.94-10.8139-2.398-3.1116-5.7-5.4048-9.453-6.5647-1.366-.4197-2.868-.8133-4.536-1.1652-15.567-3.3052-19.55 0-19.55 0s-3.016 9.8115-2.961 14.2585c.068 5.7164-8.128 9.5065-8.128 9.5065s-12.123-2.8934-12.673-5.2342c-.55-2.3408-4.888-16.0519-3.918-18.8071z"/>
  <path d="M146.607 67.0121c-1.108-3.1375-1.357-6.5143-.719-9.7802l-27.282 4.8197s.394 2.0619.84 5.1508c1.762 1.8291 3.879 3.2806 6.22 4.2661 2.341.9856 4.858 1.4846 7.399 1.4668 2.54-.0178 5.05-.5521 7.377-1.5703 2.327-1.0183 4.423-2.4993 6.16-4.3529h.005z" opacity=".1"/>
  <path fill="#F7C4A7" d="M151.26 52.9596c-.021 4.9158-1.974 9.6263-5.436 13.1158-3.463 3.4895-8.158 5.4784-13.074 5.5379-4.915.0596-9.657-1.8151-13.203-5.2198-3.546-3.4046-5.612-8.0665-5.753-12.9804v-.4535c0-3.5081.983-6.946 2.84-9.9225 1.857-2.9764 4.512-5.372 7.663-6.914.561-.2745 1.138-.5213 1.731-.7403 3.082-1.133 6.406-1.442 9.644-.8967 4.15.7067 7.941 2.7915 10.76 5.9178 2.82 3.1263 4.503 7.1115 4.778 11.3123.034.4118.05.8263.05 1.2434z"/>
  <g opacity=".1">
    <path d="m125.999 35.8234.026-.0157c-.593.219-1.17.4658-1.731.7403-3.151 1.542-5.806 3.9376-7.662 6.9141-1.857 2.9764-2.841 6.4143-2.84 9.9224v.4535c.582-.0157 1.155-.1534 1.681-.404 4.567-2.1323 7.299-8.6541 8.383-13.2028.391-1.6291.759-3.4642 2.143-4.4078z" opacity=".1"/>
    <path d="M140.338 36.3473c-1.483-.6812-3.049-1.1641-4.658-1.4363 1.32.3037 2.498 1.044 3.344 2.101.415.5641.759 1.1769 1.025 1.8247-2.494-1.0902-5.194-1.6257-7.915-1.5694-2.72.0562-5.396.7029-7.843 1.8952 1.176 2.578 4.823 3.983 7.257 4.924 2.666 1.0288 5.36 1.9698 8.081 2.823l-2.409-1.955 5.441.8654c.058-1.0826-.071-2.1673-.381-3.2062 1.043.8394 2.424 1.1209 3.556 1.8247 2.119 1.3372 3.002 3.91 4.157 6.1387.305.5891.665 1.1912 1.215 1.564-.223-3.3672-1.35-6.612-3.263-9.3918-1.913-2.7798-4.541-4.9916-7.607-6.402z" opacity=".1"/>
  </g>
  <path fill="#632652" d="m125.999 35.3985.026-.0157c-.593.219-1.17.4658-1.731.7403-3.151 1.542-5.806 3.9376-7.662 6.9141-1.857 2.9764-2.841 6.4143-2.84 9.9224v.4535c.582-.0157 1.155-.1534 1.681-.404 4.567-2.1323 7.299-8.6541 8.383-13.2027.391-1.6188.759-3.4617 2.143-4.4079z"/>
  <path fill="#632652" d="M140.338 35.925c-1.483-.6812-3.049-1.1641-4.658-1.4362 1.32.3036 2.498 1.0439 3.344 2.1009.415.5641.759 1.1769 1.025 1.8247-2.494-1.0902-5.194-1.6257-7.915-1.5694-2.72.0563-5.396.7029-7.843 1.8952 1.176 2.578 4.823 3.983 7.257 4.924 2.666 1.0288 5.36 1.9698 8.081 2.823l-2.409-1.955 5.441.8655c.058-1.0827-.071-2.1674-.381-3.2062 1.043.8393 2.424 1.1208 3.556 1.8246 2.119 1.3372 3.002 3.91 4.157 6.1387.305.5891.665 1.1913 1.215 1.564-.223-3.3672-1.35-6.612-3.263-9.3918-1.913-2.7798-4.541-4.9916-7.607-6.402z"/>
  <path d="M111.654 49.8707s19.29-23.9813 41.605 0l-1.929-5.3723s-10.471-15.2907-17.907-11.9907c-7.437 3.3-14.741 5.6486-14.741 5.6486l-7.028 11.7144z" opacity=".1"/>
  <path fill="#E14B5A" d="M111.654 49.4458s19.29-23.9813 41.605 0l-1.929-5.3723s-10.471-15.2907-17.907-11.9907c-7.437 3.3-14.741 5.6487-14.741 5.6487l-7.028 11.7143z"/>
  <path d="M95.811 101.107s-4.1315 11.021 1.6526 20.94c5.7844 9.918-5.096 14.052-5.096 14.052m70.3954-44.9101s7.163 9.0921 2.479 17.2201c-4.684 8.127-4.408 27.69-4.408 27.69" opacity=".1"/>
  <path fill="#535461" d="M89.4742 144.227H169.1c1.754 0 3.436.696 4.676 1.937 1.24 1.24 1.937 2.922 1.937 4.676H82.8637c0-1.754.6964-3.435 1.936-4.675 1.2397-1.241 2.9211-1.938 4.6745-1.938z"/>
  <path fill="#535461" d="M97.5758 98.7639h63.4252c1.335 0 2.657.2629 3.89.7738 1.234.5113 2.355 1.2593 3.299 2.2033s1.692 2.065 2.203 3.298c.511 1.234.774 2.556.774 3.891v36.811H87.4098V108.93c0-2.696 1.0711-5.282 2.9775-7.189 1.9065-1.9061 4.4923-2.9771 7.1885-2.9771z"/>
  <path fill="#fff" d="M129.218 129.28c2.74 0 4.961-2.221 4.961-4.96 0-2.74-2.221-4.961-4.961-4.961s-4.96 2.221-4.96 4.961c0 2.739 2.22 4.96 4.96 4.96z"/>
  <path stroke="#000" stroke-miterlimit="10" d="M112.757 38.6307s18.956-18.9452 39.4-.3467" opacity=".1"/>
  <path fill="#6A5C99" d="M156.945 37.4239h-1.903v10.7889h1.903V37.4239z"/>
  <path fill="#FFD037" d="M152.503 44.4045c1.74 0 3.408.691 4.638 1.9209 1.23 1.2299 1.921 2.8981 1.921 4.6375v.4223c0 1.7393-.691 3.4075-1.921 4.6374-1.23 1.23-2.898 1.9209-4.638 1.9209v-13.539z"/>
  <path fill="#6A5C99" d="M154.195 45.2517c0-.8177-.663-1.4806-1.481-1.4806-.817 0-1.48.6629-1.48 1.4806V57.099c0 .8177.663 1.4805 1.48 1.4805.818 0 1.481-.6628 1.481-1.4805V45.2517zm-46.422 3.1723h1.903V37.635h-1.903v10.789z"/>
  <path fill="#FFD037" d="M112.215 58.1547c-1.74 0-3.408-.691-4.638-1.9209-1.23-1.23-1.921-2.8981-1.921-4.6375v-.4223c0-.8612.17-1.7141.5-2.5098.329-.7957.812-1.5186 1.421-2.1276.609-.609 1.332-1.0921 2.128-1.4217.796-.3296 1.649-.4992 2.51-.4992v13.539z"/>
  <path fill="#6A5C99" d="M110.523 57.3075c0 .8177.663 1.4806 1.481 1.4806.817 0 1.48-.6629 1.48-1.4806V45.4602c0-.8177-.663-1.4806-1.48-1.4806-.818 0-1.481.6629-1.481 1.4806v11.8473z"/>
  <path fill="#FFD037" d="M154.818 25.892c-2.578-5.3593-8.193-11.8395-20.295-12.3582v-.0156h-.146l-4.288.2033v.0208c-12.022.5526-17.611 7.0094-20.181 12.3504-1.712 3.6208-2.621 7.5688-2.664 11.5736l1.48-.0365 1.481-.0339c.064-3.5654.884-7.0767 2.406-10.3015 3.264-6.7044 9.269-10.2677 17.848-10.5987l3.793-.2112c8.583.3285 14.592 3.897 17.853 10.5987 1.524 3.2261 2.346 6.7392 2.411 10.3068l1.48.0339 1.481.0365c-.043-4.0027-.95-7.9488-2.659-11.5684z"/>
  <path fill="#D6D6E3" d="M222.458 150.926H20.5176v54.218H222.458v-54.218z"/>
  <path d="M222.458 154.575H20.5176v7.038H222.458v-7.038z" opacity=".1"/>
  <path fill="#D6D6E3" d="M236 150.144H6.97076v7.038H236v-7.038z"/>
  <defs>
    <linearGradient id="a" x1="121.487" x2="121.487" y1="153.663" y2="12.2513" gradientUnits="userSpaceOnUse">
      <stop stop-color="gray" stop-opacity=".25"/>
      <stop offset=".54" stop-color="gray" stop-opacity=".12"/>
      <stop offset="1" stop-color="gray" stop-opacity=".1"/>
    </linearGradient>
  </defs>`;

const shortBreakPath = `
  <path fill="#FFD180" d="M173.732 112.365c4.201.422 8.415-.537 12.469-1.718 8.039-2.341 16.379-6.06 20.546-13.3219 1.522-2.6522 2.386-5.6215 3.236-8.5586 1.717-5.9292 3.446-11.9266 3.722-18.0931.296-6.7842-1.174-13.5291-4.268-19.5743-.454-.9132-1.223-1.631-2.166-2.0205-1.641-.6451-2.543.2363-3.26 1.1546-4.346 5.5709-3.896 13.326-4.259 20.3825-.366 7.0733-1.751 14.0566-4.114 20.7335-1.003 2.8327-2.326 5.7811-4.873 7.3753-1.56.9764-3.417 1.3345-5.226 1.6745-2.706.508-5.659.981-8.085-.32-2.484-1.3329-4.126-4.7867-6.992-5.3608-2.836-.5681-6.706 2.4026-7.972 4.9055-3.428 6.7793 5.617 12.1763 11.242 12.7413z"/>
  <path d="M190.765 98.7245c-1.56.9764-3.417 1.3345-5.226 1.6745-1.859.349-3.831.667-5.672.419 2.312.964 5.019.542 7.52.073 1.809-.34 3.666-.698 5.226-1.6745 2.547-1.5942 3.87-4.5425 4.873-7.3753 2.363-6.6769 3.749-13.6602 4.114-20.7334.363-7.0566-.087-14.8116 4.26-20.3825.503-.6453 1.104-1.2606 1.983-1.3526-.182-.1141-.373-.2125-.572-.2941-1.641-.6451-2.543.2362-3.259 1.1546-4.347 5.5709-3.897 13.326-4.26 20.3825-.365 7.0733-1.751 14.0566-4.114 20.7335-1.003 2.8328-2.326 5.7811-4.873 7.3753zm-26.427 1.3915c1.17-2.3137 4.564-5.0205 7.31-4.9695-.374-.1973-.773-.3414-1.186-.4283-2.836-.5681-6.706 2.4026-7.972 4.9055-3.198 6.3233 4.456 11.4423 10.065 12.5613-5.27-1.734-11.073-6.42-8.217-12.069zM187.12 74.7187l-48.785-24.3002-7.035 14.1221 48.786 24.3002 7.034-14.1221z" opacity=".1"/>
  <path fill="#FF6363" d="m187.12 74.7187-48.785-24.3002-6.395 12.8383 48.785 24.3002 6.395-12.8383z"/>
  <path fill="#FF6363" d="M169.563 67.1015c4.753 0 8.606-3.8529 8.606-8.6057 0-4.7527-3.853-8.6056-8.606-8.6056s-8.606 3.8529-8.606 8.6056c0 4.7528 3.853 8.6057 8.606 8.6057z"/>
  <path fill="#FFD180" d="M163.026 13.6223s14.9 4.0393 20.325 10.1239c0 0 8.789-7.4602 12.854-5.4354 4.065 2.0248-2.004 17.6046-2.004 17.6046l-5.379 24.3796s2.797 58.893-35.096 70.46c-37.894 11.566-65.0449-35.7818-56.2709-53.3967 8.7739-17.6149 35.1269-50.1501 35.1269-50.1501S155.56 1.44793 159.62.0878034C163.68-1.27233 163.026 13.6223 163.026 13.6223z"/>
  <path d="M185.688 90.3402c2.309-9.8426 3.362-19.938 3.134-30.0452l-.849 3.8498c.203 8.7892-.563 17.574-2.285 26.1954zm-83.987-15.4225c8.774-17.6149 30.032-43.8596 30.032-43.8596s22.978-25.76033 27.038-27.12044c4.06-1.36018 3.405 13.53444 3.405 13.53444s14.9 4.0393 20.325 10.124c0 0 8.79-7.4602 12.855-5.4355 1.577.7859 1.626 3.6155 1.098 6.782 1.176-4.4306 1.96-9.5316-.249-10.6318-4.065-2.0247-12.854 5.4354-12.854 5.4354-5.425-6.0847-20.325-10.1239-20.325-10.1239S163.68-1.27238 159.62.0877928C155.561 1.44791 132.582 27.2082 132.582 27.2082s-21.258 26.2447-30.032 43.8596c-.792 1.5914-1.101 4.3551-.849 3.8499z" opacity=".1" fill="#fff"/>
  <path fill="#58555D" d="M177.637 53.5233c1.672 0 3.027-1.3555 3.027-3.0276 0-1.6721-1.355-3.0276-3.027-3.0276-1.672 0-3.028 1.3555-3.028 3.0276 0 1.6721 1.356 3.0276 3.028 3.0276zM146.472 38c1.672 0 3.028-1.3555 3.028-3.0276 0-1.6721-1.356-3.0275-3.028-3.0275s-3.027 1.3554-3.027 3.0275S144.8 38 146.472 38zm18.975 9.8063c.746-1.4967-.47-3.6165-2.715-4.7348-2.245-1.1182-4.669-.8115-5.415.6852-.745 1.4967.47 3.6165 2.715 4.7348s4.67.8115 5.415-.6852z"/>
  <path fill="#FFD180" d="m185.95 53.809-.365 1.4696 13.544 3.3672.365-1.4695-13.544-3.3673zm-2.683 5.4203-.397 1.4604 14.897 4.0507.397-1.4604-14.897-4.0507zm-55.891-43.0089-1.129 1.0066 10.851 12.1692 1.129-1.0066-10.851-12.1692zm-7.567 4.6352-.873 1.2366 16.265 11.484.873-1.2366-16.265-11.484z"/>
  <path d="M135.545 83.369s-.784 25.182-14.023 20.766c-13.239-4.416 1.822-20.5088 1.822-20.5088s1.558-6.2304-1.297-8.0482m25.131 12.9648s-20.951 13.9932-10.198 22.8882c10.754 8.896 16.437-12.3993 16.437-12.3993s4.462-4.6201 7.515-3.1595" opacity=".1"/>
  <path fill="#FFD180" d="M134.722 82.2447s-.784 25.1823-14.024 20.7663c-13.239-4.4163 1.822-20.5092 1.822-20.5092s1.559-6.2303-1.297-8.0482m27.24 13.6562s-20.951 13.9932-10.198 22.8882c10.754 8.896 16.437-12.3993 16.437-12.3993s4.462-4.6202 7.515-3.1596"/>
  <path fill="#58555D" d="m118.842 96.7913-1.992 3.9977.214.107 1.991-3.9981-.213-.1066zm3.423 1.7053-1.991 3.9974.214.107 1.991-3.9978-.214-.1066zm-1.223-2.201-2.787 5.5964.214.106 2.787-5.5958-.214-.1066zm20.479 10.7244-1.991 3.998.214.106 1.991-3.998-.214-.106zm3.423 1.705-1.991 3.998.214.106 1.991-3.997-.214-.107zm-1.222-2.201-2.788 5.596.214.107 2.788-5.596-.214-.107z" opacity=".5"/>
  <path d="M149.372 61.4351c-3.549-1.7651-6.94-3.8316-10.136-6.1768-10.069-7.4024-15.49-16.0678-15.683-16.3855l1.561-1.9541c.045.0741 6.09 9.1924 15.78 16.2888 8.919 6.5317 25.948 14.3861 47.689 13.474l.111 2.6318c-15.78.6621-30.081-3.2753-39.322-7.8782z" opacity=".1"/>
  <path fill="#4D8AF0" d="m149.136 63.1181-.046-.1388c.24-.045.467-.145.662-.2921.195-.1472.354-.3375.463-.5561.11-.2186.167-.4596.168-.7041.001-.2445-.054-.486-.162-.7054l.133-.0615c.116.2381.177.4998.176.7648-.001.2651-.062.5265-.18.764-.118.2375-.288.4448-.499.6059-.21.1611-.455.2717-.715.3233z"/>
  <path d="m149.136 63.1181-.046-.1388c.24-.045.467-.145.662-.2921.195-.1472.354-.3375.463-.5561.11-.2186.167-.4596.168-.7041.001-.2445-.054-.486-.162-.7054l.133-.0615c.116.2381.177.4998.176.7648-.001.2651-.062.5265-.18.764-.118.2375-.288.4448-.499.6059-.21.1611-.455.2717-.715.3233z" opacity=".1"/>
  <path fill="#F55F44" d="M188.844 66.1576c-21.741.9121-38.77-6.9424-47.689-13.4741-9.69-7.0964-15.735-16.2147-15.78-16.2888l-2.249 1.3722c.194.3177 6.302 9.5651 16.371 16.9674 3.196 2.3452 6.587 4.4117 10.136 6.1768 9.241 4.6029 23.542 8.5403 39.322 7.8783l-.111-2.6318zm-38.687-5.2047c-.052-.0258-.095-.0664-.124-.1167-.028-.0502-.042-.1078-.038-.1656.004-.0577.026-.113.061-.1588.035-.0458.084-.08.138-.0984.055-.0184.114-.0201.17-.0049.056.0152.106.0467.144.0903.038.0437.062.0977.07.1551.007.0574-.003.1157-.029.1675-.017.0344-.04.0651-.069.0903-.029.0253-.063.0445-.1.0567-.036.0123-.075.0172-.113.0145-.038-.0027-.076-.0129-.11-.03z"/>
  <path fill="url(#a)" d="M145.71 63.3157c-.346.6948-.402 1.4986-.155 2.2346.246.7361.775 1.344 1.47 1.6901.695.3461 1.499.402 2.235.1554.736-.2466 1.344-.7755 1.69-1.4703.346-.6948.402-1.4986.155-2.2347-.246-.736-.775-1.3439-1.47-1.69-.695-.3461-1.499-.402-2.235-.1554-.736.2466-1.344.7754-1.69 1.4703zm3.272-.005c-.086-.043-.158-.1107-.205-.1944-.048-.0838-.07-.1798-.064-.2761.007-.0962.042-.1883.101-.2646.059-.0764.14-.1334.231-.1641.091-.0306.19-.0335.283-.0081.093.0253.177.0777.24.1505.063.0728.104.1627.116.2584.012.0957-.004.1929-.047.2792-.058.1158-.159.204-.282.2451-.123.0411-.257.0318-.373-.0259z" opacity=".1"/>
  <path fill="#4D8AF0" d="M145.972 63.4461c-.311.6254-.362 1.3488-.14 2.0113.222.6624.698 1.2095 1.324 1.521.625.3115 1.348.3618 2.011.1398.662-.2219 1.209-.6979 1.521-1.3232.311-.6253.362-1.3488.14-2.0112-.222-.6624-.698-1.2096-1.324-1.521-.625-.3115-1.348-.3618-2.011-.1399-.662.2219-1.209.6979-1.521 1.3232zm2.945-.0044c-.077-.0387-.142-.0996-.185-.175-.043-.0754-.063-.1618-.057-.2484.006-.0867.038-.1696.091-.2382.053-.0687.125-.1201.208-.1477.082-.0276.171-.0301.254-.0073.084.0228.159.07.216.1355.057.0655.093.1464.104.2325.011.0862-.003.1736-.042.2513-.026.0517-.061.0977-.105.1355-.043.0379-.094.0668-.149.0851-.054.0183-.112.0257-.169.0217-.058-.004-.114-.0193-.166-.045z"/>
  <path fill="#4D8AF0" d="M149.044 63.0719c-.116-.2385-.175-.5005-.173-.7655.002-.2651.064-.5262.183-.7632s.29-.4435.501-.6037c.212-.1602.457-.2697.717-.3202l.031.143c-.24.0462-.466.1473-.661.2954-.194.148-.352.3391-.461.5582-.108.2192-.165.4604-.164.7049 0 .2445.057.4857.165.7047l-.138.0464z"/>
  <path fill="#FFD180" d="M184.98 65.2194c-46.635 3.2558-57.632-26.745-57.632-26.745l57.632 26.745z"/>
  <path fill="#3F3D56" d="M63.2937 169.267h-6.1108v51.664s39.4426 12.777 77.7741 0v-51.664H63.2937z"/>
  <path fill="#3F3D56" d="M95.5144 175.378c21.1696 0 38.3316-2.612 38.3316-5.833 0-3.222-17.162-5.833-38.3316-5.833-21.1699 0-38.3315 2.611-38.3315 5.833 0 3.221 17.1616 5.833 38.3315 5.833z"/>
  <path d="M95.5144 175.378c21.1696 0 38.3316-2.612 38.3316-5.833 0-3.222-17.162-5.833-38.3316-5.833-21.1699 0-38.3315 2.611-38.3315 5.833 0 3.221 17.1616 5.833 38.3315 5.833z" opacity=".1"/>
  <path fill="#3F3D56" d="M140.072 107.54c-9.669 35.745-42.7906 57.883-42.7906 57.883s-17.4434-35.816-7.7736-71.5618c9.6698-35.7454 42.7912-57.8834 42.7912-57.8834s17.443 35.8167 7.773 71.5622z"/>
  <path fill="#FF6363" d="M52.1043 107.54c9.6698 35.745 42.791 57.883 42.791 57.883s17.4437-35.816 7.7737-71.5618c-9.6699-35.7454-42.7911-57.8834-42.7911-57.8834S42.4345 71.7945 52.1043 107.54z"/>
  <path fill="#3F3D56" d="M66.3133 99.8578c26.5341 25.8302 29.775 65.5362 29.775 65.5362s-39.7792-2.172-66.3133-28.002C3.24094 111.562 0 71.856 0 71.856s39.7793 2.172 66.3133 28.0018zm59.5497 0C99.3292 125.688 96.0883 165.394 96.0883 165.394s39.7797-2.172 66.3137-28.002 29.775-65.536 29.775-65.536-39.78 2.172-66.314 28.0018z"/>
  <path fill="#FF6363" d="M96.0699 48.1614c6.7501 0 12.2221-5.4718 12.2221-12.2216 0-6.7499-5.472-12.2217-12.2221-12.2217-6.7498 0-12.2216 5.4718-12.2216 12.2217 0 6.7498 5.4718 12.2216 12.2216 12.2216z"/>
  <path fill="url(#b)" d="M207.278 241.633c15.194 0 27.512-12.318 27.512-27.512s-12.318-27.512-27.512-27.512-27.512 12.318-27.512 27.512 12.318 27.512 27.512 27.512z" opacity=".5"/>
  <path fill="#F55F44" d="M207.278 239.877c14.225 0 25.756-11.532 25.756-25.756 0-14.225-11.531-25.756-25.756-25.756-14.224 0-25.756 11.531-25.756 25.756 0 14.224 11.532 25.756 25.756 25.756z"/>
  <path fill="url(#c)" d="M132.549 231.698c-3.889.344-8.166-1.588-9.005-5.443-.485-2.226.282-4.403 1.024-6.508.814-2.307 1.516-4.3.501-5.94-.462-.747-1.27-1.314-2.074-1.814-1.048-.653-2.173-1.255-3.26-1.837-1.879-1.006-3.822-2.047-5.549-3.427-3.395-2.712-5.112-6.33-4.593-9.678.449-2.893 2.405-5.109 4.296-7.252 1.94-2.198 3.773-4.274 3.73-6.816-.058-3.456-3.591-5.938-6.708-8.127l-.486-.342c-3.804-2.683-7.457-7.339-5.236-11.631.776-1.498 2.07-2.46 3.321-3.39.843-.569 1.612-1.242 2.29-2.001 2.286-2.833 1.119-7.028.511-8.7-.462-1.271-1.066-2.539-1.65-3.766-.863-1.812-1.756-3.685-2.274-5.706l-.085-.332c-1.249-4.864-1.248-5.046.072-9.714l.165-.582 1.972.556-.165.584c-1.195 4.225-1.195 4.225-.06 8.647l.085.332c.469 1.828 1.28 3.531 2.139 5.334.605 1.27 1.231 2.584 1.727 3.947 1.536 4.225 1.228 8.121-.843 10.687-.784.896-1.678 1.689-2.662 2.359-1.114.827-2.165 1.609-2.723 2.687-1.728 3.338 2.077 7.237 4.597 9.015l.483.34c3.342 2.348 7.503 5.27 7.578 9.769.056 3.336-2.129 5.811-4.242 8.205-1.774 2.011-3.451 3.91-3.807 6.211-.477 3.077 1.674 6.028 3.846 7.764 1.581 1.263 3.357 2.214 5.238 3.221 1.117.598 2.271 1.216 3.375 1.903 1.016.632 2.05 1.37 2.734 2.476 1.532 2.474.595 5.131-.31 7.699-.677 1.92-1.316 3.733-.955 5.391.652 2.996 4.582 4.359 7.7 3.709 2.551-.532 4.797-1.933 7.175-3.416.768-.48 1.564-.976 2.364-1.437 4.371-2.51 8.331-3.123 11.453-1.774.984.463 1.914 1.031 2.776 1.693.671.511 1.383.964 2.129 1.357 1.697.741 3.611.815 5.36.207 1.749-.607 3.205-1.851 4.078-3.485.15-.312.286-.648.429-1.004.454-1.129.97-2.409 2.147-3.211 1.232-.841 2.751-.828 3.86-.819l11.454.097-.018 2.049-11.454-.097c-1.086-.009-2.038.02-2.688.462-.663.453-1.021 1.342-1.401 2.285-.149.37-.303.753-.482 1.125-1.109 2.126-2.988 3.747-5.253 4.534-2.264.786-4.744.678-6.932-.302-.848-.441-1.659-.954-2.421-1.531-.745-.576-1.548-1.072-2.397-1.48-3.165-1.369-6.978.153-9.619 1.671-.768.441-1.547.928-2.301 1.398-2.425 1.513-4.932 3.078-7.841 3.684-.368.076-.741.131-1.115.164z" opacity=".5"/>
  <path fill="#F55F44" d="M133.055 230.772c-3.889.343-8.166-1.589-9.005-5.443-.485-2.227.282-4.403 1.024-6.508.813-2.307 1.516-4.3.501-5.941-.463-.747-1.271-1.313-2.075-1.814-1.047-.652-2.172-1.254-3.259-1.836-1.879-1.007-3.823-2.047-5.55-3.427-3.394-2.712-5.111-6.33-4.592-9.678.448-2.893 2.404-5.109 4.296-7.252 1.94-2.198 3.772-4.274 3.729-6.816-.058-3.456-3.59-5.938-6.707-8.127l-.487-.342c-3.803-2.683-7.456-7.339-5.235-11.631.775-1.498 2.069-2.46 3.32-3.39.844-.57 1.613-1.242 2.29-2.001 2.287-2.833 1.12-7.028.512-8.7-.462-1.271-1.066-2.54-1.651-3.766-.863-1.812-1.755-3.685-2.273-5.706l-.085-.332c-1.25-4.864-1.248-5.046.072-9.714l.165-.582 1.971.556-.165.584c-1.195 4.225-1.195 4.225-.059 8.647l.085.332c.469 1.828 1.28 3.531 2.139 5.334.605 1.27 1.231 2.584 1.727 3.947 1.536 4.225 1.228 8.121-.844 10.687-.783.896-1.678 1.689-2.662 2.359-1.113.827-2.165 1.609-2.722 2.687-1.728 3.338 2.076 7.237 4.596 9.014l.483.34c3.343 2.349 7.503 5.271 7.579 9.77.056 3.335-2.129 5.811-4.242 8.205-1.775 2.011-3.451 3.91-3.808 6.211-.476 3.077 1.675 6.027 3.847 7.763 1.581 1.263 3.357 2.215 5.238 3.222 1.116.597 2.271 1.216 3.375 1.903 1.016.632 2.05 1.37 2.734 2.476 1.531 2.474.595 5.13-.311 7.699-.676 1.92-1.316 3.733-.955 5.391.653 2.996 4.583 4.359 7.701 3.709 2.551-.532 4.797-1.933 7.174-3.417.769-.48 1.564-.976 2.365-1.436 4.371-2.51 8.331-3.124 11.453-1.774.983.463 1.914 1.031 2.775 1.693.671.51 1.383.964 2.129 1.357 1.697.741 3.611.815 5.361.207 1.749-.607 3.205-1.852 4.078-3.485.15-.313.285-.648.429-1.004.454-1.129.97-2.409 2.147-3.211 1.232-.841 2.75-.828 3.859-.819l11.455.097-.018 2.049-11.454-.097c-1.087-.009-2.038.019-2.688.462-.663.452-1.022 1.342-1.401 2.285-.149.37-.303.753-.483 1.125-1.109 2.126-2.988 3.747-5.252 4.534-2.265.786-4.744.678-6.932-.302-.849-.442-1.659-.954-2.422-1.532-.744-.576-1.547-1.071-2.396-1.479-3.165-1.369-6.978.153-9.619 1.671-.769.441-1.548.927-2.301 1.397-2.425 1.514-4.933 3.078-7.842 3.685-.368.076-.74.131-1.114.164z"/>
  <path stroke="#000" stroke-miterlimit="10" d="M210.08 195.95s14.359 1.229 16.505 22.195m-39.23 4.935s-6.793-17.029 15.389-28.685m-9.893 24.379s-3.131-8.831 3.72-14.432m9.33-.824s5.951 4.176 4.066 16.095m6.934-27.938s9.793 4.424 13.542 20.253m-27.828-18.991s5.677-2.264 9.75.608m-13.862 32.663s5.497 5.685 25.073-2.215m-31.619-28.645s-7.408 5.943-7.304 17.099m6.492 10.298s-1.44 3.653 2.342 6.551m32.361-2.859s-2.005 7.229-6.164 6.715m-6.108-25.905s2.933 3.267 1.544 7.503m-16.096-5.923s-2.212 4.896-.419 8.558m3.626-8.841s2.53 5.359.747 8.454" opacity=".2"/>
  <defs>
    <linearGradient id="a" x1="147.025" x2="149.635" y1="67.2404" y2="62.0008" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="209.699" x2="204.857" y1="241.526" y2="186.716" gradientUnits="userSpaceOnUse">
      <stop stop-color="gray" stop-opacity=".25"/>
      <stop offset=".53514" stop-color="gray" stop-opacity=".12"/>
      <stop offset="1" stop-color="gray" stop-opacity=".1"/>
    </linearGradient>
    <linearGradient id="c" x1="100921" x2="97673.8" y1="109638" y2="72881.3" gradientUnits="userSpaceOnUse">
      <stop stop-color="gray" stop-opacity=".25"/>
      <stop offset=".53514" stop-color="gray" stop-opacity=".12"/>
      <stop offset="1" stop-color="gray" stop-opacity=".1"/>
    </linearGradient>
  </defs>
`;

const longBreakPath = `
  <path fill="#F2F2F2" d="M193.972 60.5029H75.8546v93.2641H193.972V60.5029z"/>
  <path fill="#3F3D56" d="M177.485 142.939H58.8752V49.1833H177.485v93.7557zm-118.1177-.492H176.993V49.6754H59.3673v92.7716zm82.7797 29.357H5.30072v.581H142.147v-.581z"/>
  <path fill="#D0CDE1" d="m101.693 123.836-.069-48.7235 55.156 24.2837-55.087 24.4398z"/>
  <path fill="#A0616A" d="M90.4902 77.2319s5.1963-5.8394 6.2752-3.6141c1.079 2.2253-5.2811 5.6083-5.2811 5.6083l-.9941-1.9942z"/>
  <path fill="#D0CDE1" d="M93.2106 79.6404s-2.3107.8489-2.9801 1.88c-.6693 1.0335-2.8963 2.1114-2.8963 2.1114l-.1944.1156L85.0383 85l-2.7536 1.6388-8.7161 5.1923-11.5042 4.6066c-.0886-1.6069-.1747-3.2138-.2559-4.7346-.0246-.4552-.0295-.908-.0197-1.3608.1452-.0443.2928-.0836.4429-.1156 3.4033-.726 4.8503-1.7816 4.8503-1.7816l6.6539-4.0136s5.2243-3.3294 8.5389-4.892c.4651-.2215.8933-.406 1.2624-.5414 3.0022-1.1024 7.8548-2.884 7.8548-2.884l.0566.1107 1.2009 2.3254.5611 1.0902z"/>
  <path d="M93.2106 79.6404s-2.3107.8489-2.9801 1.88c-.6693 1.0335-2.8963 2.1114-2.8963 2.1114l-.1944.1156L85.0383 85l-2.7536 1.6388-8.7161 5.1923-11.5042 4.6066c-.0886-1.6069-.1747-3.2138-.2559-4.7346-.0246-.4552-.0295-.908-.0197-1.3608.1452-.0443.2928-.0836.4429-.1156 3.4033-.726 4.8503-1.7816 4.8503-1.7816l6.6539-4.0136s5.2243-3.3294 8.5389-4.892c.4651-.2215.8933-.406 1.2624-.5414 3.0022-1.1024 7.8548-2.884 7.8548-2.884l.0566.1107 1.2009 2.3254.5611 1.0902z" opacity=".1"/>
  <path fill="#FF6363" d="m91.392 123.784-.0689-48.7235 55.1559 24.2836-55.087 24.4399z"/>
  <path d="M142.955 97.7925 91.3876 120.671l.0044 3.113 55.087-24.4399-3.524-1.5516z" opacity=".2"/>
  <path fill="#A0616A" d="M75.9777 163.979v5.167h3.9372l-.4921-5.413-3.4451.246zm-15.2569-.246-1.2304 5.906 4.9216.246v-6.152h-3.6912z"/>
  <path fill="#2F2E41" d="M62.6894 116.978s-1.2304-.492-1.4765 3.937c-.246 4.43-.4921 19.686-.4921 19.686s-2.4608 13.535-1.4765 17.472c.9843 3.937.9843 6.644.9843 6.644h4.4294l.2461-2.461.2461-6.644s2.4608-6.152 1.7225-11.812l5.9059-17.963 2.953 19.194s-1.2304 4.675-.9844 9.597c.2461 4.921.2461 11.319.2461 11.319l4.9216-.492 3.9372-23.131s2.2147-23.131 0-24.362c-2.2147-1.23-21.1627-.984-21.1627-.984z"/>
  <path fill="#2F2E41" d="M77.4541 167.424s-2.2147-2.953-3.199-.738c-.9843 2.214-3.199 5.167-1.4765 6.644 1.7226 1.476 3.9373 1.968 4.6755 1.476.7383-.492 8.3667-4.429 8.3667-4.429s1.4765-4.183-1.4765-4.43c-2.9529-.246-3.9372-.984-3.9372-.984l-2.953 2.461zm-16.9794.738s0-2.461-.9843-1.722c-.9843.738-1.7226 3.937-1.7226 3.937s-5.9058 4.675-.246 4.675c5.6598 0 9.3509.985 8.8588-1.23-.4922-2.215-1.2304-5.906-1.2304-5.906s-2.4608-3.199-4.6755.246z"/>
  <path fill="#A0616A" d="M75.9776 74.4063c3.3977 0 6.152-2.7543 6.152-6.152 0-3.3976-2.7543-6.1519-6.152-6.1519-3.3976 0-6.1519 2.7543-6.1519 6.1519 0 3.3977 2.7543 6.152 6.1519 6.152z"/>
  <path fill="#A0616A" d="M71.1791 70.346s-.9843 7.1363-2.4608 8.1206c-1.4764.9843 9.8432 1.2304 9.8432 1.2304s-.7383-5.6598 0-7.1363l-7.3824-2.2147zm19.3172 48.847s3.6911 6.89 1.2304 7.136c-2.4608.246-3.4451-6.89-3.4451-6.89l2.2147-.246z"/>
  <path fill="#2F2E41" d="M70.2938 72.7216c.9335.4551 1.9938.5802 3.0076.3548 1.0138-.2254 1.9212-.7879 2.574-1.5957.8277-1.0818 1.3076-2.657 2.6275-2.9934.8617-.2196 1.8555.1949 2.625-.251 1.4357-.832.4274-3.4694 1.7606-4.4575-.5736-.0079-1.1232-.231-1.54-.625-.4168-.3941-.6703-.9303-.7104-1.5025-.0341.4606-.6397.6671-1.0815.5324-.4418-.1347-.7887-.4746-1.2012-.6824-.7208-.3631-1.5737-.297-2.3773-.2222-2.0532.1911-4.2686.4517-5.7769 1.858-1.4174 1.3213-1.8885 3.4342-1.6125 5.3521.276 1.918.7634 2.5475 1.795 4.1878l-.0899.0446z"/>
  <path fill="#D0CDE1" d="m85.5747 81.0504-.0344.2461L85.0383 85l-2.0597 15.173-.1107.81s.2436.593.5487 1.538c.5168 1.592 1.2157 4.183 1.2427 6.624.0083.479-.0147.959-.0689 1.435-.3691 3.137-.4626 6.275-.4847 7.648-.0074.458-.0074.718-.0074.718l-22.3932-.738c.1399-.315.2639-.637.3716-.964.8091-2.379 1.1019-4.902.8588-7.402-.219-2.082-.561-7.754-.8711-13.4043-.0886-1.6069-.1747-3.2138-.2559-4.7346-.0246-.4552-.0295-.908-.0197-1.3608.0601-2.6461.7009-5.2466 1.8771-7.6177 1.1762-2.3711 2.859-4.4547 4.9294-6.1036 0 0 .4528.0197 1.1664.0615 2.2443.1304 7.0773.47 8.5956 1.0286.0697.0246.1379.0533.2042.0862.7333.3617 2.2664 1.0778 3.7133 1.7422 1.7103.7874 3.2999 1.5109 3.2999 1.5109z"/>
  <path fill="#D0CDE1" d="M82.1296 81.2965h3.4451s2.953 3.4451 2.4608 6.8902c-.4921 3.4451 0 5.1676 0 5.1676l1.4765 7.6287s1.7225 7.874 1.7225 11.073v8.367l-3.9372.492s0-2.461-.7383-3.445c-.7382-.984-.9843-3.445-.9843-3.445l-2.9529-15.7491-.4922-16.9794z"/>
  <path fill="#FF6363" d="m31.8147 76.8771-7.0948 2.744 2.6489 6.8491 7.0948-2.7439-2.6489-6.8492z"/>
  <path fill="#3F3D56" d="m33.1815 83.1861-7.4682 2.8884-2.7883-7.2096 7.4682-2.8884 2.7883 7.2096zm-7.2342 2.3835 6.7214-2.5995-2.5095-6.4887-6.7214 2.5995 2.5095 6.4887z"/>
  <path fill="#FF6363" d="m215.335 29.9517-2.473-7.1937-6.944 2.3876 2.473 7.1936 6.944-2.3875z"/>
  <path fill="#3F3D56" d="m208.979 31.0785-2.603-7.5722 7.31-2.5132 2.603 7.5722-7.31 2.5132zm-2.107-7.3193 2.343 6.8151 6.579-2.2619-2.343-6.8151-6.579 2.2619zM20.792 172.174l-.3118-.116c-.0685-.026-6.8883-2.639-10.083-8.564-3.19488-5.925-1.63052-13.058-1.61435-13.13l.07363-.324.31168.116c.06852.026 6.88824 2.639 10.08304 8.564 3.1949 5.925 1.6305 13.058 1.6143 13.13l-.0735.324zm-9.8833-8.956c2.701 5.01 8.0903 7.578 9.4558 8.164.2596-1.464 1.0737-7.382-1.6248-12.386-2.6984-5.004-8.0897-7.576-9.45576-8.164-.25976 1.465-1.07365 7.382 1.62476 12.386z"/>
  <path fill="#FF6363" d="M12.8386 161.416c5.7414 3.454 7.9525 10.315 7.9525 10.315s-7.0973 1.261-12.83864-2.194C2.21115 166.083 0 159.222 0 159.222s7.09734-1.26 12.8386 2.194z"/>
  <path fill="#3F3D56" d="M234.79 6.16702H5.19891v.49216H234.79v-.49216zM9.88944 4.45954c1.23146 0 2.22976-.9983 2.22976-2.22977C12.1192.998302 11.1209 0 9.88944 0 8.65797 0 7.65967.998302 7.65967 2.22977c0 1.23147.9983 2.22977 2.22977 2.22977zm6.87516 0c1.2314 0 2.2297-.9983 2.2297-2.22977C18.9943.998302 17.996 0 16.7646 0c-1.2315 0-2.2298.998302-2.2298 2.22977 0 1.23147.9983 2.22977 2.2298 2.22977zm6.8751 0c1.2315 0 2.2298-.9983 2.2298-2.22977C25.8695.998302 24.8712 0 23.6397 0s-2.2298.998302-2.2298 2.22977c0 1.23147.9983 2.22977 2.2298 2.22977zM142.943 22.9971H90.4288v.59h52.5142v-.59zm0 4.1303H90.4288v.5901h52.5142v-.5901zm0 4.1304H90.4288v.59h52.5142v-.59z"/>
`;
export const svgPaths = {
  focus: focusPath,
  shortBreak: shortBreakPath,
  longBreak: longBreakPath,
};
