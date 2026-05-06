# network/networkcontainer/TestMigNetworkContainer_basicAzure Test Details
# Found 24 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL(x 2)
Success rate: 91.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-08 00:55](#error-2026-04-08t0055370000) | NO_CAPACITY /api/atlas/v2/groups/69d5a50c74e39a6641492f7f/containers | dev | 1.08s
[2026-04-17 00:59](#error-2026-04-17t0059100000) | NO_CAPACITY /api/atlas/v2/groups/69e18369abf3dbd56b5c5adb/containers | dev | 1.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7015488Z === RUN   TestMigNetworkContainer_basicAzure
2026-04-08T00:55:37.7025137Z    test_name=TestMigNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/ba4b6d2b-e185-4233-8dba-d41fb074e02a/terraform
2026-04-08T00:55:37.7027215Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-04-08T00:55:37.7028077Z         
2026-04-08T00:55:37.7031563Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50c74e39a6641492f7f/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d5a50c74e39a6641492f7f. Reason: Conflict. Params: [AZURE 69d5a50c74e39a6641492f7f], BadRequestDetail: 
2026-04-08T00:55:37.7033379Z         
2026-04-08T00:55:37.7033766Z           with mongodbatlas_network_container.test,
2026-04-08T00:55:37.7034494Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-04-08T00:55:37.7035175Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-04-08T00:55:37.7035537Z         
2026-04-08T00:55:37.7035821Z --- FAIL: TestMigNetworkContainer_basicAzure (1.85s)
```

- 2026-04-09: MISSING
- 2026-04-10 PASS 2 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 2 minutes
- 2026-04-16: MISSING
- 2026-04-17

### Error 2026-04-17T00:59:10+00:00
```
2026-04-17T00:59:10.0469495Z === RUN   TestMigNetworkContainer_basicAzure
2026-04-17T00:59:10.0478293Z    test_terraform_path=/home/runner/work/_temp/89fbab3a-2d8c-4053-acca-08e70f90b7ff/terraform
2026-04-17T00:59:10.0479424Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:59:10.0479974Z         
2026-04-17T00:59:10.0482181Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e18369abf3dbd56b5c5adb/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69e18369abf3dbd56b5c5adb. Reason: Conflict. Params: [AZURE 69e18369abf3dbd56b5c5adb], BadRequestDetail: 
2026-04-17T00:59:10.0484243Z         
2026-04-17T00:59:10.0484647Z           with mongodbatlas_network_container.test,
2026-04-17T00:59:10.0485399Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-04-17T00:59:10.0486099Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-04-17T00:59:10.0486467Z         
2026-04-17T00:59:10.0486756Z --- FAIL: TestMigNetworkContainer_basicAzure (1.63s)
```

- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24 PASS 2 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 2 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 2 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05: MISSING
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
