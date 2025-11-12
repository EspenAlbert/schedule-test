# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | timeout | 3726.09s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3727.07s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23: MISSING
- 2025-10-24 PASS 3 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 minutes
- 2025-11-03 PASS 3 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 3 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 minutes
- 2025-11-10 PASS 3 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 2 minutes