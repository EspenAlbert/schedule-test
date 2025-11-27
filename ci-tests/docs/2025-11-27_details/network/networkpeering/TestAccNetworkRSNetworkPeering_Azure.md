# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-07 00:40](#error-2025-11-07t0040370000) |  | dev | 495.03s
[2025-11-27 00:37](#error-2025-11-27t0037540000) |  | dev | 575.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 4 minutes
- 2025-10-30 PASS 4 minutes
- 2025-10-31 PASS 4 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 5 minutes
- 2025-11-04 PASS 5 minutes
- 2025-11-05
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-11-06 PASS 4 minutes
- 2025-11-07

### Error 2025-11-07T00:40:37+00:00
```
2025-11-07T00:40:37.8195642Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8196565Z     resource_test.go:31: Creating execution project: test-acc-tf-p-1766206174823045643
2025-11-07T00:40:37.8204221Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8231382Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-07T00:40:37.8231905Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-07T00:40:37.8232412Z         
2025-11-07T00:40:37.8232799Z         Error: peer networking is in a failed state: RETRYABLE
2025-11-07T00:40:37.8233306Z         
2025-11-07T00:40:37.8233675Z           with mongodbatlas_network_peering.test,
2025-11-07T00:40:37.8234341Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-07T00:40:37.8234952Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-07T00:40:37.8235280Z         
2025-11-07T00:40:37.8235581Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (495.30s)
```

- 2025-11-08 PASS 5 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 4 minutes
- 2025-11-11 PASS 4 minutes
- 2025-11-12 PASS 4 minutes
- 2025-11-13 PASS 12 minutes
- 2025-11-14 PASS 4 minutes
- 2025-11-15 PASS 4 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 4 minutes
- 2025-11-18 PASS 4 minutes
- 2025-11-19 PASS 5 minutes
- 2025-11-20 PASS 4 minutes
- 2025-11-21 PASS 4 minutes
- 2025-11-22 PASS 4 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 5 minutes
- 2025-11-25 PASS 4 minutes
- 2025-11-26 PASS 4 minutes
- 2025-11-27

### Error 2025-11-27T00:37:54+00:00
```
2025-11-27T00:37:54.5982742Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-27T00:37:54.5983845Z     resource_test.go:31: Creating execution project: test-acc-tf-p-7343689992253445438
2025-11-27T00:37:54.5992199Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-27T00:37:54.5993109Z   diagnostic_summary=
2025-11-27T00:37:54.5996678Z    tf_req_id=8f4f30aa-21e8-98d7-3148-476602d05508 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_network_peering diagnostic_detail="" diagnostic_severity=ERROR
2025-11-27T00:37:54.6014336Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-27T00:37:54.6014861Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-27T00:37:54.6015260Z         
2025-11-27T00:37:54.6015652Z         Error: peer networking is in a failed state: RETRYABLE
2025-11-27T00:37:54.6015991Z         
2025-11-27T00:37:54.6016347Z           with mongodbatlas_network_peering.test,
2025-11-27T00:37:54.6017127Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-27T00:37:54.6017990Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-27T00:37:54.6018341Z         
2025-11-27T00:37:54.6018645Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (575.20s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-02 00:41](#error-2025-11-02t0041460000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/6906a5e27d8b3f733a091bb2/peers | qa |  | 124.10s
[2025-11-09 00:42](#error-2025-11-09t0042080000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/690fe078640f4b0e4d077951/peers | qa | flaky_500 | 124.03s
[2025-11-13 08:05](#error-2025-11-13t0805250000) |  | qa | real_test_failure | 174.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:41:46+00:00
```
2025-11-02T00:41:46.0807763Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0808406Z     resource_test.go:31: Creating execution project: test-acc-tf-p-5549952542089013314
2025-11-02T00:41:46.0813742Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0827543Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-02T00:41:46.0828067Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:41:46.0828452Z         
2025-11-02T00:41:46.0830382Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5e27d8b3f733a091bb2/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-02T00:41:46.0831563Z         
2025-11-02T00:41:46.0831901Z           with mongodbatlas_network_peering.test,
2025-11-02T00:41:46.0832556Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-02T00:41:46.0833278Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-02T00:41:46.0833693Z         
2025-11-02T00:41:46.0875052Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (124.96s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09

### Error 2025-11-09T00:42:08+00:00
```
2025-11-09T00:42:08.0243196Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0243766Z     resource_test.go:31: Creating execution project: test-acc-tf-p-4430574270234060132
2025-11-09T00:42:08.0250041Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0262361Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-09T00:42:08.0262875Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-09T00:42:08.0263262Z         
2025-11-09T00:42:08.0264954Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/690fe078640f4b0e4d077951/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-09T00:42:08.0266118Z         
2025-11-09T00:42:08.0266467Z           with mongodbatlas_network_peering.test,
2025-11-09T00:42:08.0267125Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-09T00:42:08.0267731Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-09T00:42:08.0268055Z         
2025-11-09T00:42:08.0308748Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (124.32s)
```

- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - FAIL 2 minutes

### Error 2025-11-13T08:05:25+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T08:05:25.665000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='14 days ago')

```
2025-11-13T08:05:25.6657600Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2025-11-13T08:05:25.6658174Z     resource_test.go:31: Creating execution project: test-acc-tf-p-5387017491803348097
2025-11-13T08:05:25.6664600Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2025-11-13T08:05:25.6682971Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2025-11-13T08:05:25.6683490Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2025-11-13T08:05:25.6683869Z         
2025-11-13T08:05:25.6684904Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2025-11-13T08:05:25.6685560Z         
2025-11-13T08:05:25.6686147Z           with mongodbatlas_network_peering.test,
2025-11-13T08:05:25.6686816Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-11-13T08:05:25.6687425Z           19: 		resource "mongodbatlas_network_peering" "test" {
2025-11-13T08:05:25.6687749Z         
2025-11-13T08:05:25.6691461Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (174.01s)
```

  - PASS 4 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 4 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 4 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
