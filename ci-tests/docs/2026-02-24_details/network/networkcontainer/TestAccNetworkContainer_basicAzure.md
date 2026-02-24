# network/networkcontainer/TestAccNetworkContainer_basicAzure Test Details
# Found 35 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-29 00:42](#error-2026-01-29t0042370000) | NO_CAPACITY /api/atlas/v2/groups/697aab83f4a2a16d1a689af2/containers | dev | 0.07s
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143afb2e54ee9958fec23/containers | dev | 0.06s
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e693b0f8d5bab8188d98/containers | dev | 0.06s
[2026-02-16 00:49](#error-2026-02-16t0049450000) | NO_CAPACITY /api/atlas/v2/groups/69926735fca6e0756f2b34be/containers | dev | 0.05s
[2026-02-17 17:55](#error-2026-02-17t1755250000) | NO_CAPACITY /api/atlas/v2/groups/6994a9136947a790bd117b11/containers | dev | 0.06s
[2026-02-19 00:45](#error-2026-02-19t0045500000) | NO_CAPACITY /api/atlas/v2/groups/69965bc399696b9761bc10ae/containers | dev | 0.07s
[2026-02-21 00:42](#error-2026-02-21t0042550000) | NO_CAPACITY /api/atlas/v2/groups/6998fe1723648dd3abd4b4ab/containers | dev | 0.06s
[2026-02-24 00:43](#error-2026-02-24t0043140000) | NO_CAPACITY /api/atlas/v2/groups/699cf2a6ae2412ce62117c55/containers | dev | 0.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27 PASS 2 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29

### Error 2026-01-29T00:42:37+00:00
```
2026-01-29T00:42:37.8451952Z === RUN   TestAccNetworkContainer_basicAzure
2026-01-29T00:42:37.8456963Z === CONT  TestAccNetworkContainer_basicAzure
2026-01-29T00:42:37.8470760Z    test_terraform_path=/home/runner/work/_temp/cfb9137a-485b-402e-8279-9a27ad0ff0a0/terraform test_name=TestAccNetworkContainer_basicAzure
2026-01-29T00:42:37.8472000Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-01-29T00:42:37.8472522Z         
2026-01-29T00:42:37.8474507Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab83f4a2a16d1a689af2/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 697aab83f4a2a16d1a689af2. Reason: Conflict. Params: [AZURE 697aab83f4a2a16d1a689af2], BadRequestDetail: 
2026-01-29T00:42:37.8475910Z         
2026-01-29T00:42:37.8476314Z           with mongodbatlas_network_container.test,
2026-01-29T00:42:37.8477047Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-01-29T00:42:37.8477742Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-01-29T00:42:37.8478105Z         
2026-01-29T00:42:37.8478394Z --- FAIL: TestAccNetworkContainer_basicAzure (0.69s)
```

- 2026-01-30 PASS 2 minutes
- 2026-01-31 PASS 2 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1542091Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-03T00:43:22.1566447Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-03T00:43:22.1579437Z   
2026-02-03T00:43:22.1599609Z === NAME  TestAccNetworkContainer_basicAzure
2026-02-03T00:43:22.1600222Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:43:22.1600695Z         
2026-02-03T00:43:22.1602653Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143afb2e54ee9958fec23/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 698143afb2e54ee9958fec23. Reason: Conflict. Params: [AZURE 698143afb2e54ee9958fec23], BadRequestDetail: 
2026-02-03T00:43:22.1604029Z         
2026-02-03T00:43:22.1604394Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1605110Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1605782Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1606131Z         
2026-02-03T00:43:22.1606805Z --- FAIL: TestAccNetworkContainer_basicAzure (0.58s)
```

- 2026-02-04 PASS 2 minutes
- 2026-02-05

### Error 2026-02-05T00:45:00+00:00
```
2026-02-05T00:45:00.9599343Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-05T00:45:00.9605475Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-05T00:45:00.9623286Z    test_terraform_path=/home/runner/work/_temp/936b4311-42a4-462d-b826-a7497f6653c1/terraform test_working_directory=/tmp/plugintest1014268894
2026-02-05T00:45:00.9624841Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-05T00:45:00.9625847Z         
2026-02-05T00:45:00.9627887Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e693b0f8d5bab8188d98/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6983e693b0f8d5bab8188d98. Reason: Conflict. Params: [AZURE 6983e693b0f8d5bab8188d98], BadRequestDetail: 
2026-02-05T00:45:00.9629186Z         
2026-02-05T00:45:00.9629575Z           with mongodbatlas_network_container.test,
2026-02-05T00:45:00.9630305Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-05T00:45:00.9630991Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-05T00:45:00.9631358Z         
2026-02-05T00:45:00.9631665Z --- FAIL: TestAccNetworkContainer_basicAzure (0.57s)
```

- 2026-02-06 PASS 2 minutes
- 2026-02-07 PASS 2 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 minutes
- 2026-02-10 PASS 2 minutes
- 2026-02-11 PASS 2 minutes
- 2026-02-12 PASS 2 minutes
- 2026-02-13 PASS 2 minutes
- 2026-02-14 PASS 2 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:49:45+00:00
```
2026-02-16T00:49:45.0095578Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-16T00:49:45.0099841Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-16T00:49:45.0112309Z    test_name=TestAccNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/04b3bf35-0e20-4513-bcf8-7e4348884893/terraform test_working_directory=/tmp/plugintest2431217232
2026-02-16T00:49:45.0113429Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-16T00:49:45.0113904Z         
2026-02-16T00:49:45.0115898Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69926735fca6e0756f2b34be/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69926735fca6e0756f2b34be. Reason: Conflict. Params: [AZURE 69926735fca6e0756f2b34be], BadRequestDetail: 
2026-02-16T00:49:45.0117289Z         
2026-02-16T00:49:45.0117661Z           with mongodbatlas_network_container.test,
2026-02-16T00:49:45.0118383Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-16T00:49:45.0119262Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-16T00:49:45.0119617Z         
2026-02-16T00:49:45.0119896Z --- FAIL: TestAccNetworkContainer_basicAzure (0.53s)
```

- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
  - FAIL a moment

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1137055Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-17T17:55:25.1144845Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-17T17:55:25.1157520Z    test_name=TestAccNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/ca4cc730-564b-49dd-8d19-3dd8fcc94905/terraform test_working_directory=/tmp/plugintest2309719573
2026-02-17T17:55:25.1158650Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-17T17:55:25.1159134Z         
2026-02-17T17:55:25.1161293Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a9136947a790bd117b11/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a9136947a790bd117b11. Reason: Conflict. Params: [AZURE 6994a9136947a790bd117b11], BadRequestDetail: 
2026-02-17T17:55:25.1162663Z         
2026-02-17T17:55:25.1163044Z           with mongodbatlas_network_container.test,
2026-02-17T17:55:25.1163763Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-17T17:55:25.1164446Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-17T17:55:25.1164819Z         
2026-02-17T17:55:25.1165115Z --- FAIL: TestAccNetworkContainer_basicAzure (0.61s)
```

- 2026-02-18 PASS 2 minutes
- 2026-02-19

### Error 2026-02-19T00:45:50+00:00
```
2026-02-19T00:45:50.2823905Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-19T00:45:50.2828617Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-19T00:45:50.2842731Z   
2026-02-19T00:45:50.2843323Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-19T00:45:50.2843799Z         
2026-02-19T00:45:50.2845714Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc399696b9761bc10ae/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69965bc399696b9761bc10ae. Reason: Conflict. Params: [AZURE 69965bc399696b9761bc10ae], BadRequestDetail: 
2026-02-19T00:45:50.2847092Z         
2026-02-19T00:45:50.2847464Z           with mongodbatlas_network_container.test,
2026-02-19T00:45:50.2848178Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-19T00:45:50.2848854Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-19T00:45:50.2849211Z         
2026-02-19T00:45:50.2849501Z --- FAIL: TestAccNetworkContainer_basicAzure (0.71s)
```

- 2026-02-20 PASS 2 minutes
- 2026-02-21

### Error 2026-02-21T00:42:55+00:00
```
2026-02-21T00:42:55.5489852Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-21T00:42:55.5497086Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-21T00:42:55.5521627Z    test_name=TestAccNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/3762f7ee-60e5-4608-b8b1-a6e1baf7a021/terraform
2026-02-21T00:42:55.5523423Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-21T00:42:55.5524272Z         
2026-02-21T00:42:55.5528160Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe1723648dd3abd4b4ab/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6998fe1723648dd3abd4b4ab. Reason: Conflict. Params: [AZURE 6998fe1723648dd3abd4b4ab], BadRequestDetail: 
2026-02-21T00:42:55.5530789Z         
2026-02-21T00:42:55.5531444Z           with mongodbatlas_network_container.test,
2026-02-21T00:42:55.5532779Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-21T00:42:55.5534035Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-21T00:42:55.5534669Z         
2026-02-21T00:42:55.5535165Z --- FAIL: TestAccNetworkContainer_basicAzure (0.58s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 2 minutes
- 2026-02-24

### Error 2026-02-24T00:43:14+00:00
```
2026-02-24T00:43:14.4890117Z === RUN   TestAccNetworkContainer_basicAzure
2026-02-24T00:43:14.4896705Z === CONT  TestAccNetworkContainer_basicAzure
2026-02-24T00:43:14.4912069Z   
2026-02-24T00:43:14.4912981Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:43:14.4913832Z         
2026-02-24T00:43:14.4916330Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a6ae2412ce62117c55/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699cf2a6ae2412ce62117c55. Reason: Conflict. Params: [AZURE 699cf2a6ae2412ce62117c55], BadRequestDetail: 
2026-02-24T00:43:14.4917731Z         
2026-02-24T00:43:14.4918189Z           with mongodbatlas_network_container.test,
2026-02-24T00:43:14.4919222Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-24T00:43:14.4919978Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-24T00:43:14.4920358Z         
2026-02-24T00:43:14.4920649Z --- FAIL: TestAccNetworkContainer_basicAzure (0.72s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 2 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
