# network/networkcontainer/TestAccNetworkContainer_basicAzure Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-07 00:51](#error-2026-04-07t0051100000) | NO_CAPACITY /api/atlas/v2/groups/69d4537ec0b364eb740dd918/containers | dev | 0.08s
[2026-04-08 00:55](#error-2026-04-08t0055370000) | NO_CAPACITY /api/atlas/v2/groups/69d5a50c74e39a6641492f7f/containers | dev | 0.08s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | NO_CAPACITY /api/atlas/v2/groups/69d6f4ecbcd76cc4105e3e6a/containers | dev | 0.08s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | NO_CAPACITY /api/atlas/v2/groups/69d998f792f7ea8dceebf6ff/containers | dev | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:51:10+00:00
```
2026-04-07T00:51:10.3210008Z === RUN   TestAccNetworkContainer_basicAzure
2026-04-07T00:51:10.3217525Z === CONT  TestAccNetworkContainer_basicAzure
2026-04-07T00:51:10.3233187Z    test_name=TestAccNetworkContainer_basicAzure
2026-04-07T00:51:10.3234012Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-04-07T00:51:10.3234503Z         
2026-04-07T00:51:10.3236451Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4537ec0b364eb740dd918/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d4537ec0b364eb740dd918. Reason: Conflict. Params: [AZURE 69d4537ec0b364eb740dd918], BadRequestDetail: 
2026-04-07T00:51:10.3237840Z         
2026-04-07T00:51:10.3238212Z           with mongodbatlas_network_container.test,
2026-04-07T00:51:10.3238937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-07T00:51:10.3239614Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-07T00:51:10.3239998Z         
2026-04-07T00:51:10.3240279Z --- FAIL: TestAccNetworkContainer_basicAzure (0.81s)
```

- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7037649Z === RUN   TestAccNetworkContainer_basicAzure
2026-04-08T00:55:37.7041923Z === CONT  TestAccNetworkContainer_basicAzure
2026-04-08T00:55:37.7056260Z   
2026-04-08T00:55:37.7056758Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:55:37.7057230Z         
2026-04-08T00:55:37.7059170Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50c74e39a6641492f7f/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d5a50c74e39a6641492f7f. Reason: Conflict. Params: [AZURE 69d5a50c74e39a6641492f7f], BadRequestDetail: 
2026-04-08T00:55:37.7060514Z         
2026-04-08T00:55:37.7060885Z           with mongodbatlas_network_container.test,
2026-04-08T00:55:37.7061604Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-08T00:55:37.7062529Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-08T00:55:37.7062896Z         
2026-04-08T00:55:37.7063181Z --- FAIL: TestAccNetworkContainer_basicAzure (0.77s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8801989Z === RUN   TestAccNetworkContainer_basicAzure
2026-04-09T00:44:32.8807623Z === CONT  TestAccNetworkContainer_basicAzure
2026-04-09T00:44:32.8821169Z   
2026-04-09T00:44:32.8821904Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:44:32.8822403Z         
2026-04-09T00:44:32.8824608Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4ecbcd76cc4105e3e6a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d6f4ecbcd76cc4105e3e6a. Reason: Conflict. Params: [AZURE 69d6f4ecbcd76cc4105e3e6a], BadRequestDetail: 
2026-04-09T00:44:32.8826182Z         
2026-04-09T00:44:32.8826579Z           with mongodbatlas_network_container.test,
2026-04-09T00:44:32.8827318Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-09T00:44:32.8828002Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-09T00:44:32.8828383Z         
2026-04-09T00:44:32.8828685Z --- FAIL: TestAccNetworkContainer_basicAzure (0.76s)
```

- 2026-04-10 PASS 2 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7846741Z === RUN   TestAccNetworkContainer_basicAzure
2026-04-11T00:49:03.7851113Z === CONT  TestAccNetworkContainer_basicAzure
2026-04-11T00:49:03.7864317Z   
2026-04-11T00:49:03.7865033Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:49:03.7865519Z         
2026-04-11T00:49:03.7867470Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d998f792f7ea8dceebf6ff/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d998f792f7ea8dceebf6ff. Reason: Conflict. Params: [AZURE 69d998f792f7ea8dceebf6ff], BadRequestDetail: 
2026-04-11T00:49:03.7868960Z         
2026-04-11T00:49:03.7869347Z           with mongodbatlas_network_container.test,
2026-04-11T00:49:03.7870085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-11T00:49:03.7870778Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-11T00:49:03.7871143Z         
2026-04-11T00:49:03.7871447Z --- FAIL: TestAccNetworkContainer_basicAzure (0.66s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 2 minutes
- 2026-04-16 PASS 2 minutes
- 2026-04-17 PASS 2 minutes
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 minutes
- 2026-04-21 PASS 2 minutes
- 2026-04-22 PASS 2 minutes
- 2026-04-23 PASS 2 minutes
- 2026-04-24 PASS 2 minutes
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28 PASS 2 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30 PASS 2 minutes
- 2026-05-01 PASS 2 minutes
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 minutes
- 2026-05-04
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 2 minutes
