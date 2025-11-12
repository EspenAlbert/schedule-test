# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 43 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 35) FAIL(x 8)
Success rate: 81.40%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:41](#error-2025-10-05t0041500000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68e1bbe8f758b3057a1ac4bc/peers | qa |  | 126.03s
[2025-10-12 00:41](#error-2025-10-12t0041110000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68eaf63abae6807c754961f1/peers | qa |  | 129.04s
[2025-10-19 00:43](#error-2025-10-19t0043550000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68f4316621ed692ad0016d23/peers | qa |  | 155.09s
[2025-10-22 08:40](#error-2025-10-22t0840040000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68f8956e0a10646572de3965/peers | qa | flaky_500 | 128.05s
[2025-10-26 00:42](#error-2025-10-26t0042130000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/68fd6b7a07915e1b14f91914/peers | qa |  | 126.03s
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b115e2dc7470847b382d | dev | flaky_500 | 198.00s
[2025-11-02 00:41](#error-2025-11-02t0041460000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/6906a5e65ace12378d293bb6/peers | qa |  | 125.10s
[2025-11-09 00:42](#error-2025-11-09t0042080000) | AZURE_CUSTOMER_NETWORK_UNREACHABLE /api/atlas/v2/groups/690fe07c7abbe00b1f2e5697/peers | qa |  | 126.04s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 3 minutes
- 2025-10-05

### Error 2025-10-05T00:41:50+00:00
```
2025-10-05T00:41:50.6797631Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-05T00:41:50.6801937Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-05T00:41:50.6845426Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-05T00:41:50.6846125Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-05T00:41:50.6846617Z         
2025-10-05T00:41:50.6848468Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbe8f758b3057a1ac4bc/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-05T00:41:50.6849858Z         
2025-10-05T00:41:50.6850224Z           with mongodbatlas_network_peering.first,
2025-10-05T00:41:50.6850897Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-10-05T00:41:50.6851524Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-10-05T00:41:50.6851860Z         
2025-10-05T00:41:50.6853753Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbe8fec65822ddfc72e7/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-05T00:41:50.6854938Z         
2025-10-05T00:41:50.6855294Z           with mongodbatlas_network_peering.second,
2025-10-05T00:41:50.6855970Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-10-05T00:41:50.6856743Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-10-05T00:41:50.6857083Z         
2025-10-05T00:41:50.6857989Z   diagnostic_summary=
2025-10-05T00:41:50.6861620Z    diagnostic_detail="" tf_rpc=ApplyResourceChange tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_network_peering tf_req_id=e220fc35-be8e-bc0b-3182-5589a9c00182 tf_proto_version=6.10
2025-10-05T00:41:50.6863058Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (126.25s)
```

- 2025-10-06 PASS 3 minutes
- 2025-10-07 PASS 3 minutes
- 2025-10-08 PASS 4 minutes
- 2025-10-09 PASS 6 minutes
- 2025-10-10 PASS 5 minutes
- 2025-10-11 PASS 4 minutes
- 2025-10-12

### Error 2025-10-12T00:41:11+00:00
```
2025-10-12T00:41:11.0416431Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-12T00:41:11.0421039Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-12T00:41:11.0462296Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-12T00:41:11.0462996Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-12T00:41:11.0463486Z         
2025-10-12T00:41:11.0465205Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf63abae6807c754961f1/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-12T00:41:11.0466399Z         
2025-10-12T00:41:11.0466759Z           with mongodbatlas_network_peering.first,
2025-10-12T00:41:11.0467438Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-10-12T00:41:11.0468066Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-10-12T00:41:11.0468507Z         
2025-10-12T00:41:11.0470421Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf63abae6807c754961ef/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-12T00:41:11.0471604Z         
2025-10-12T00:41:11.0471959Z           with mongodbatlas_network_peering.second,
2025-10-12T00:41:11.0472644Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-10-12T00:41:11.0473414Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-10-12T00:41:11.0473763Z         
2025-10-12T00:41:11.0476285Z   diagnostic_summary=
2025-10-12T00:41:11.0478889Z   
2025-10-12T00:41:11.0479676Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (129.43s)
```

- 2025-10-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 8 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 8 minutes
- 2025-10-18 PASS 8 minutes
- 2025-10-19

### Error 2025-10-19T00:43:55+00:00
```
2025-10-19T00:43:55.9741791Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-19T00:43:55.9746100Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-19T00:43:55.9791547Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-19T00:43:55.9792235Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-19T00:43:55.9792711Z         
2025-10-19T00:43:55.9794391Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4316621ed692ad0016d23/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-19T00:43:55.9795797Z         
2025-10-19T00:43:55.9796155Z           with mongodbatlas_network_peering.first,
2025-10-19T00:43:55.9796823Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-10-19T00:43:55.9797456Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-10-19T00:43:55.9797789Z         
2025-10-19T00:43:55.9799677Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4316621ed692ad0016d10/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-19T00:43:55.9800854Z         
2025-10-19T00:43:55.9801205Z           with mongodbatlas_network_peering.second,
2025-10-19T00:43:55.9801882Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-10-19T00:43:55.9802520Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-10-19T00:43:55.9802851Z         
2025-10-19T00:43:55.9804027Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (155.90s)
```

- 2025-10-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 3 minutes
- 2025-10-22
  - PASS 8 minutes
  - FAIL 2 minutes

### Error 2025-10-22T08:40:04+00:00
```
2025-10-22T08:40:04.8891944Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-22T08:40:04.8898071Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-22T08:40:04.8944859Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-22T08:40:04.8945560Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-22T08:40:04.8946051Z         
2025-10-22T08:40:04.8947816Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f8956e0a10646572de3965/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-22T08:40:04.8949020Z         
2025-10-22T08:40:04.8949373Z           with mongodbatlas_network_peering.first,
2025-10-22T08:40:04.8950059Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-10-22T08:40:04.8950796Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-10-22T08:40:04.8951135Z         
2025-10-22T08:40:04.8953060Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f8956e0a10646572de3963/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-22T08:40:04.8954265Z         
2025-10-22T08:40:04.8954618Z           with mongodbatlas_network_peering.second,
2025-10-22T08:40:04.8955301Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-10-22T08:40:04.8956083Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-10-22T08:40:04.8956432Z         
2025-10-22T08:40:04.8958202Z   diagnostic_summary=
2025-10-22T08:40:04.8961332Z    diagnostic_detail="" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_network_peering
2025-10-22T08:40:04.8962413Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (128.53s)
```

- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 8 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26

### Error 2025-10-26T00:42:13+00:00
```
2025-10-26T00:42:13.8214029Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-26T00:42:13.8219033Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-26T00:42:13.8264429Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2025-10-26T00:42:13.8265144Z     resource_test.go:86: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-26T00:42:13.8265639Z         
2025-10-26T00:42:13.8267512Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7a07915e1b14f91914/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-26T00:42:13.8268725Z         
2025-10-26T00:42:13.8269259Z           with mongodbatlas_network_peering.first,
2025-10-26T00:42:13.8270028Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2025-10-26T00:42:13.8270652Z           25: 		resource "mongodbatlas_network_peering" "first" {
2025-10-26T00:42:13.8270990Z         
2025-10-26T00:42:13.8272908Z         Error: error creating MongoDB Network Peering Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7a328f9755b2ce9266/peers POST: HTTP 404 Not Found (Error code: "AZURE_CUSTOMER_NETWORK_UNREACHABLE") Detail: External Azure subscription unreachable. Reason: Not Found. Params: [], BadRequestDetail: 
2025-10-26T00:42:13.8274134Z         
2025-10-26T00:42:13.8274486Z           with mongodbatlas_network_peering.second,
2025-10-26T00:42:13.8275160Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2025-10-26T00:42:13.8275944Z           48: 		resource "mongodbatlas_network_peering" "second" {
2025-10-26T00:42:13.8276287Z         
2025-10-26T00:42:13.8277342Z   diagnostic_summary=
2025-10-26T00:42:13.8280856Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_network_peering tf_req_id=28e221d6-c5f4-8810-e627-0a4f2d48657f tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2025-10-26T00:42:13.8282238Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (126.26s)
```

- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 3 minutes
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

- 2025-11-03 PASS 8 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 8 minutes
- 2025-11-06 PASS 3 minutes
- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 8 minutes
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

- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 8 minutes
- 2025-11-12 PASS 3 minutes