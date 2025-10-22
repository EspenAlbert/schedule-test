# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3729.06s
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | timeout | 3726.09s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3727.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 54 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6748896Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6761864Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6819552Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6820399Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:28:35.6821208Z         
2025-10-02T01:28:35.6823190Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6824941Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6825577Z         
2025-10-02T01:28:35.6825945Z           with mongodbatlas_network_peering.test,
2025-10-02T01:28:35.6826633Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "test":
2025-10-02T01:28:35.6827269Z           25: 	resource "mongodbatlas_network_peering" "test" {
2025-10-02T01:28:35.6827610Z         
2025-10-02T01:28:35.6828579Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3729.56s)
```

- 2025-10-03 PASS 54 minutes
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6641315Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6652759Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6740624Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6741670Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-04T01:28:00.6742375Z         
2025-10-04T01:28:00.6744176Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:28:00.6746724Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:28:00.6747768Z         
2025-10-04T01:28:00.6748373Z           with mongodbatlas_network_peering.test,
2025-10-04T01:28:00.6749705Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "test":
2025-10-04T01:28:00.6750786Z           25: 	resource "mongodbatlas_network_peering" "test" {
2025-10-04T01:28:00.6751350Z         
2025-10-04T01:28:00.6752783Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3726.89s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4372000Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4381114Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4439081Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4439847Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-07T01:29:37.4440269Z         
2025-10-07T01:29:37.4441263Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:29:37.4442596Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:29:37.4443197Z         
2025-10-07T01:29:37.4443563Z           with mongodbatlas_network_peering.test,
2025-10-07T01:29:37.4444333Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "test":
2025-10-07T01:29:37.4444951Z           25: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T01:29:37.4445284Z         
2025-10-07T01:29:37.4446007Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (3727.75s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS 4 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12 PASS 2 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 3 minutes
- 2025-10-20 PASS 2 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 3 minutes
  - PASS 3 minutes