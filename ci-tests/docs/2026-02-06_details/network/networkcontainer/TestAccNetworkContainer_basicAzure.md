# network/networkcontainer/TestAccNetworkContainer_basicAzure Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-15 00:35](#error-2026-01-15t0035450000) | NO_CAPACITY /api/atlas/v2/groups/696834e9674325799df8bcc3/containers | dev | flaky_500 | 0.06s
[2026-01-29 00:42](#error-2026-01-29t0042370000) | NO_CAPACITY /api/atlas/v2/groups/697aab83f4a2a16d1a689af2/containers | dev |  | 0.07s
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143afb2e54ee9958fec23/containers | dev |  | 0.06s
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e693b0f8d5bab8188d98/containers | dev |  | 0.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09 PASS 2 minutes
- 2026-01-10 PASS 2 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 2 minutes
- 2026-01-13 PASS 2 minutes
- 2026-01-14 PASS 2 minutes
- 2026-01-15

### Error 2026-01-15T00:35:45+00:00
```
2026-01-15T00:35:45.4976392Z === RUN   TestAccNetworkContainer_basicAzure
2026-01-15T00:35:45.4982307Z === CONT  TestAccNetworkContainer_basicAzure
2026-01-15T00:35:45.5003899Z    test_terraform_path=/home/runner/work/_temp/cae03f22-eb47-4175-af11-0ab14bed2f6a/terraform test_name=TestAccNetworkContainer_basicAzure test_working_directory=/tmp/plugintest2048011954 test_step_number=1
2026-01-15T00:35:45.5006390Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-01-15T00:35:45.5007259Z         
2026-01-15T00:35:45.5011018Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/696834e9674325799df8bcc3/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 696834e9674325799df8bcc3. Reason: Conflict. Params: [AZURE 696834e9674325799df8bcc3], BadRequestDetail: 
2026-01-15T00:35:45.5013742Z         
2026-01-15T00:35:45.5014447Z           with mongodbatlas_network_container.test,
2026-01-15T00:35:45.5015830Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-01-15T00:35:45.5017106Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-01-15T00:35:45.5017728Z         
2026-01-15T00:35:45.5018223Z --- FAIL: TestAccNetworkContainer_basicAzure (0.60s)
```

- 2026-01-16 PASS 2 minutes
- 2026-01-17 PASS 2 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 minutes
- 2026-01-20 PASS 2 minutes
- 2026-01-21 PASS 2 minutes
- 2026-01-22 PASS 2 minutes
- 2026-01-23 PASS 2 minutes
- 2026-01-24 PASS 2 minutes
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 minutes
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
