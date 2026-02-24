# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 35 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 7)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:42](#error-2026-01-29t0042370000) | NO_CAPACITY /api/atlas/v2/groups/697aab85f4a2a16d1a68a972/containers | dev |  | 3.06s
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143b0e3c7fce2317daf01/containers | dev |  | 3.09s
[2026-02-04 01:37](#error-2026-02-04t0137440000) |  | dev | timeout | 3726.04s
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e695b0f8d5bab818a67a/containers | dev |  | 3.04s
[2026-02-17 17:55](#error-2026-02-17t1755250000) | NO_CAPACITY /api/atlas/v2/groups/6994a91534398663d0bc738c/containers | dev |  | 4.04s
[2026-02-19 00:45](#error-2026-02-19t0045500000) | NO_CAPACITY /api/atlas/v2/groups/69965bc599696b9761bc21b6/containers | dev |  | 4.00s
[2026-02-24 00:43](#error-2026-02-24t0043140000) | NO_CAPACITY /api/atlas/v2/groups/699cf2a88dfec41eaa84b158/containers | dev |  | 7.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 minutes
- 2026-01-27 PASS 4 minutes
- 2026-01-28 PASS 5 minutes
- 2026-01-29

### Error 2026-01-29T00:42:37+00:00
```
2026-01-29T00:42:37.8482378Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-01-29T00:42:37.8482990Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6382380834535242390
2026-01-29T00:42:37.8489425Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-01-29T00:42:37.8503645Z   
2026-01-29T00:42:37.8504069Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-01-29T00:42:37.8504488Z         
2026-01-29T00:42:37.8506477Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab85f4a2a16d1a68a972/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 697aab85f4a2a16d1a68a972. Reason: Conflict. Params: [AZURE 697aab85f4a2a16d1a68a972], BadRequestDetail: 
2026-01-29T00:42:37.8507859Z         
2026-01-29T00:42:37.8508242Z           with mongodbatlas_network_container.test,
2026-01-29T00:42:37.8508977Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-01-29T00:42:37.8509691Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-01-29T00:42:37.8510547Z         
2026-01-29T00:42:37.8510858Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3.58s)
```

- 2026-01-30 PASS 4 minutes
- 2026-01-31 PASS 4 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1610333Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-03T00:43:22.1610926Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-4724263499807436258
2026-02-03T00:43:22.1617231Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-03T00:43:22.1630186Z   
2026-02-03T00:43:22.1630599Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:43:22.1631005Z         
2026-02-03T00:43:22.1632958Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b0e3c7fce2317daf01/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 698143b0e3c7fce2317daf01. Reason: Conflict. Params: [AZURE 698143b0e3c7fce2317daf01], BadRequestDetail: 
2026-02-03T00:43:22.1634466Z         
2026-02-03T00:43:22.1634828Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1635545Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1636224Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1636574Z         
2026-02-03T00:43:22.1636863Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3.92s)
```

- 2026-02-04

### Error 2026-02-04T01:37:44+00:00
```
2026-02-04T01:37:44.2574098Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-04T01:37:44.2575025Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6675213497570265593
2026-02-04T01:37:44.2582646Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-04T01:37:44.2608659Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-04T01:37:44.2609222Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-04T01:37:44.2609845Z         
2026-02-04T01:37:44.2610961Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'ADDING_PEER', timeout: 1h0m0s)
2026-02-04T01:37:44.2612459Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-04T01:37:44.2613154Z         
2026-02-04T01:37:44.2613527Z           with mongodbatlas_network_peering.test,
2026-02-04T01:37:44.2614241Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-02-04T01:37:44.2614927Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-02-04T01:37:44.2615290Z         
2026-02-04T01:37:44.2616928Z   diagnostic_summary=
2026-02-04T01:37:44.2627278Z    diagnostic_detail="" diagnostic_severity=ERROR tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_req_id=48212f23-d294-cae8-8240-1cc26a389e1f
2026-02-04T01:37:44.2628585Z   diagnostic_summary=
2026-02-04T01:37:44.2632733Z    tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_req_id=024858c5-883c-d81e-9842-386031c04ab0 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_network_peering diagnostic_detail="" diagnostic_severity=ERROR
2026-02-04T01:37:44.2646792Z    test_working_directory=/tmp/plugintest3245704968 test_name=TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-04T01:37:44.2661070Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3726.40s)
```

- 2026-02-05

### Error 2026-02-05T00:45:00+00:00
```
2026-02-05T00:45:00.9635619Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9636233Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7954895038688731946
2026-02-05T00:45:00.9641669Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9656229Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9656858Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:45:00.9657288Z         
2026-02-05T00:45:00.9659238Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e695b0f8d5bab818a67a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6983e695b0f8d5bab818a67a. Reason: Conflict. Params: [AZURE 6983e695b0f8d5bab818a67a], BadRequestDetail: 
2026-02-05T00:45:00.9660860Z         
2026-02-05T00:45:00.9661401Z           with mongodbatlas_network_container.test,
2026-02-05T00:45:00.9662134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-05T00:45:00.9662822Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-05T00:45:00.9663197Z         
2026-02-05T00:45:00.9663516Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3.42s)
```

- 2026-02-06 PASS 4 minutes
- 2026-02-07 PASS 4 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 minutes
- 2026-02-10 PASS 4 minutes
- 2026-02-11 PASS 4 minutes
- 2026-02-12 PASS 4 minutes
- 2026-02-13 PASS 4 minutes
- 2026-02-14 PASS 4 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 minutes
- 2026-02-17
  - PASS 4 minutes
  - PASS 4 minutes
  - FAIL 4 seconds

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1170124Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1170725Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6508913672134210239
2026-02-17T17:55:25.1176594Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1190902Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1191809Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-17T17:55:25.1192574Z         
2026-02-17T17:55:25.1196221Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a91534398663d0bc738c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a91534398663d0bc738c. Reason: Conflict. Params: [AZURE 6994a91534398663d0bc738c], BadRequestDetail: 
2026-02-17T17:55:25.1197661Z         
2026-02-17T17:55:25.1198129Z           with mongodbatlas_network_container.test,
2026-02-17T17:55:25.1198865Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-17T17:55:25.1199813Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-17T17:55:25.1200210Z         
2026-02-17T17:55:25.1200520Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.35s)
```

- 2026-02-18 PASS 4 minutes
- 2026-02-19

### Error 2026-02-19T00:45:50+00:00
```
2026-02-19T00:45:50.2853288Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2853889Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7116939691372997646
2026-02-19T00:45:50.2859378Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2873761Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2874304Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-19T00:45:50.2874728Z         
2026-02-19T00:45:50.2876642Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc599696b9761bc21b6/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69965bc599696b9761bc21b6. Reason: Conflict. Params: [AZURE 69965bc599696b9761bc21b6], BadRequestDetail: 
2026-02-19T00:45:50.2878005Z         
2026-02-19T00:45:50.2878367Z           with mongodbatlas_network_container.test,
2026-02-19T00:45:50.2879082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-19T00:45:50.2879757Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-19T00:45:50.2880119Z         
2026-02-19T00:45:50.2880526Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.01s)
```

- 2026-02-20 PASS 4 minutes
- 2026-02-21 PASS 4 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 4 minutes
- 2026-02-24

### Error 2026-02-24T00:43:14+00:00
```
2026-02-24T00:43:14.4924420Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4925060Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8496786574935761708
2026-02-24T00:43:14.4931742Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4944746Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4945387Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:43:14.4945803Z         
2026-02-24T00:43:14.4948045Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a88dfec41eaa84b158/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699cf2a88dfec41eaa84b158. Reason: Conflict. Params: [AZURE 699cf2a88dfec41eaa84b158], BadRequestDetail: 
2026-02-24T00:43:14.4949694Z         
2026-02-24T00:43:14.4950111Z           with mongodbatlas_network_container.test,
2026-02-24T00:43:14.4950926Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-24T00:43:14.4951664Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-24T00:43:14.4952024Z         
2026-02-24T00:43:14.4952324Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (7.28s)
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
- 2026-02-01 PASS 4 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 4 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
