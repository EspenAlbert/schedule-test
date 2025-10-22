# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3727.07s
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | timeout | 3726.04s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3725.08s
[2025-10-20 10:32](#error-2025-10-20t1032360000) |  | dev |  | 374.10s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 2 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 54 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6750691Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6764718Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6805803Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-02T01:28:35.6806324Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:28:35.6806706Z         
2025-10-02T01:28:35.6807720Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6809319Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6809932Z         
2025-10-02T01:28:35.6810286Z           with mongodbatlas_network_peering.test,
2025-10-02T01:28:35.6810957Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-10-02T01:28:35.6811578Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-10-02T01:28:35.6811910Z         
2025-10-02T01:28:35.6827916Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (3727.75s)
```

- 2025-10-03 PASS 2 minutes
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6642650Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6655613Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6717267Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-04T01:28:00.6718153Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-04T01:28:00.6718806Z         
2025-10-04T01:28:00.6720760Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:28:00.6723135Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:28:00.6724180Z         
2025-10-04T01:28:00.6724784Z           with mongodbatlas_network_peering.test,
2025-10-04T01:28:00.6725964Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-10-04T01:28:00.6727038Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-10-04T01:28:00.6727606Z         
2025-10-04T01:28:00.6752057Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (3726.41s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4373402Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4383723Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4387216Z   diagnostic_summary=
2025-10-07T01:29:37.4390251Z   
2025-10-07T01:29:37.4425598Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4426266Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-10-07T01:29:37.4426687Z         
2025-10-07T01:29:37.4427696Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:29:37.4429037Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:29:37.4429644Z         
2025-10-07T01:29:37.4429989Z           with mongodbatlas_network_peering.test,
2025-10-07T01:29:37.4430650Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_network_peering" "test":
2025-10-07T01:29:37.4431257Z           23: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T01:29:37.4431589Z         
2025-10-07T01:29:37.4438707Z    test_name=TestMigNetworkNetworkPeering_basicAWS
2025-10-07T01:29:37.4445577Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (3725.82s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 4 minutes
- 2025-10-10 PASS 5 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 2 minutes
- 2025-10-14 PASS 2 minutes
- 2025-10-15 PASS 2 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 2 minutes
  - FAIL 6 minutes

### Error 2025-10-20T10:32:36+00:00
```
2025-10-20T10:32:36.9651637Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9663383Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9696492Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9697635Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-20T10:32:36.9698435Z         
2025-10-20T10:32:36.9699310Z         Error: error deleting MongoDB Network Peering Container (68f60e525a13b66d7cb68d1e): couldn't find resource (21 retries)
2025-10-20T10:32:36.9700155Z         
2025-10-20T10:32:36.9700512Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (374.97s)
```

- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 2 minutes