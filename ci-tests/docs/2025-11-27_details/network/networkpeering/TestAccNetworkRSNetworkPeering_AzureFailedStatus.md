# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b115e2dc7470847b382d | dev | flaky_500 | 198.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 8 minutes
- 2025-10-30

### Error 2025-10-30T00:34:13+00:00
```
2025-10-30T00:34:13.8300804Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-30T00:34:13.8306446Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-30T00:34:13.8369790Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-30T00:34:13.8370507Z     resource_test.go:87: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:34:13.8371008Z         
2025-10-30T00:34:13.8371355Z         Error: error when destroying resource
2025-10-30T00:34:13.8371683Z         
2025-10-30T00:34:13.8372062Z         error deleting project (6902b115e2dc7470847b382d):
2025-10-30T00:34:13.8372679Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115e2dc7470847b382d
2025-10-30T00:34:13.8373360Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:34:13.8374003Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:34:13.8374456Z         BadRequestDetail: 
2025-10-30T00:34:13.8374826Z         
2025-10-30T00:34:13.8375167Z         Error: error when destroying resource
2025-10-30T00:34:13.8375606Z         
2025-10-30T00:34:13.8376010Z         error deleting project (6902b115e2dc7470847b3845):
2025-10-30T00:34:13.8376622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115e2dc7470847b3845
2025-10-30T00:34:13.8377287Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:34:13.8377923Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:34:13.8378375Z         BadRequestDetail: 
2025-10-30T00:34:13.8378776Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (198.05s)
```

- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 8 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 8 minutes
- 2025-11-06 PASS 3 minutes
- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 8 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 8 minutes
- 2025-11-12 PASS 3 minutes
- 2025-11-13 PASS 5 minutes
- 2025-11-14 PASS 8 minutes
- 2025-11-15 PASS 3 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 minutes
- 2025-11-18 PASS 3 minutes
- 2025-11-19 PASS 3 minutes
- 2025-11-20 PASS 3 minutes
- 2025-11-21 PASS 8 minutes
- 2025-11-22 PASS 3 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 3 minutes
- 2025-11-25 PASS 3 minutes
- 2025-11-26 PASS 3 minutes
- 2025-11-27 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:41](#error-2025-11-02t0041460000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/6906a5e65ace12378d293bb6/peers | qa | 125.10s
[2025-11-09 00:42](#error-2025-11-09t0042080000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/690fe07c7abbe00b1f2e5697/peers | qa | 126.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:41:46+00:00
```
2025-11-02T00:41:46.0809584Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-02T00:41:46.0814478Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-02T00:41:46.0854998Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-02T00:41:46.0855699Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-02T00:41:46.0856188Z         
2025-11-02T00:41:46.0857888Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5e65ace12378d293bb6/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-02T00:41:46.0859270Z         
2025-11-02T00:41:46.0859627Z           with mongodbatlas_network_peering.first,
2025-11-02T00:41:46.0860298Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-11-02T00:41:46.0860924Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-11-02T00:41:46.0861251Z         
2025-11-02T00:41:46.0863394Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5e65ace12378d293bb5/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-02T00:41:46.0864597Z         
2025-11-02T00:41:46.0864955Z           with mongodbatlas_network_peering.second,
2025-11-02T00:41:46.0865633Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-11-02T00:41:46.0866270Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-11-02T00:41:46.0866601Z         
2025-11-02T00:41:46.0869395Z   diagnostic_summary=
2025-11-02T00:41:46.0871901Z   
2025-11-02T00:41:46.0875535Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (125.99s)
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
2025-11-09T00:42:08.0244632Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-09T00:42:08.0248849Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-09T00:42:08.0289156Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-11-09T00:42:08.0289839Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-09T00:42:08.0290315Z         
2025-11-09T00:42:08.0292142Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/690fe07c7abbe00b1f2e5697/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-09T00:42:08.0293322Z         
2025-11-09T00:42:08.0293675Z           with mongodbatlas_network_peering.first,
2025-11-09T00:42:08.0294341Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-11-09T00:42:08.0294961Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-11-09T00:42:08.0295289Z         
2025-11-09T00:42:08.0297491Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/690fe07c640f4b0e4d07885a/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-11-09T00:42:08.0298678Z         
2025-11-09T00:42:08.0299032Z           with mongodbatlas_network_peering.second,
2025-11-09T00:42:08.0299701Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-11-09T00:42:08.0300327Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-11-09T00:42:08.0300656Z         
2025-11-09T00:42:08.0302872Z   diagnostic_summary=
2025-11-09T00:42:08.0305499Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-11-09T00:42:08.0309220Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (126.44s)
```

- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 3 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
