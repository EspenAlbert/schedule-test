# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 10 TestRuns in dev, qa from 2026-05-01 to 2026-05-06 from master branch: 1 unique tests, FAIL(x 10)
Success rate: 0.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-01 01:52](#error-2026-05-01t0152470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69f3fab26381d809dde9f5bc/cloudProviderAccess | dev | out_of_capacity | 229.07s
[2026-05-02 01:24](#error-2026-05-02t0124130000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69f54ae361aa98158bd8d9ae/clusters | dev | out_of_capacity | 191.03s
[2026-05-04 01:38](#error-2026-05-04t0138530000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69f7ee6dc8db7e025f537ba1/clusters | dev | out_of_capacity | 194.01s
[2026-05-05 02:16](#error-2026-05-05t0216140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69f93f0f6d9c7064609c46eb/cloudProviderAccess | dev | flaky_500 | 1972.07s
[2026-05-06 02:34](#error-2026-05-06t0234200000) | VALIDATION_ERROR /api/atlas/v2/groups/69fa907a60f26af82a9bf7d8/streams/privateLinkConnections | dev |  | 3546.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22: MISSING
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01

### Error 2026-05-01T01:52:47+00:00
```
2026-05-01T01:52:47.2486600Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-01T01:52:47.2489961Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-01T01:52:47.2585407Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-01T01:52:47.2586662Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-01T01:52:47.2587507Z         
2026-05-01T01:52:47.2590624Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f3fab26381d809dde9f5bc/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-01T01:52:47.2592795Z         
2026-05-01T01:52:47.2593604Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-01T01:52:47.2595365Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-01T01:52:47.2597092Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-01T01:52:47.2597833Z         
2026-05-01T01:52:47.2598675Z         Error: Error in create
2026-05-01T01:52:47.2599147Z         
2026-05-01T01:52:47.2599775Z           with mongodbatlas_advanced_cluster.test,
2026-05-01T01:52:47.2601049Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-01T01:52:47.2602249Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-01T01:52:47.2602865Z         
2026-05-01T01:52:47.2603663Z         cluster name: test-acc-tf-c-2050822422198665571, API error details:
2026-05-01T01:52:47.2605143Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f3fab26381d809dde9f5bc/clusters
2026-05-01T01:52:47.2606489Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-01T01:52:47.2607776Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-01T01:52:47.2608779Z         Conflict. Params: [], BadRequestDetail: 
2026-05-01T01:52:47.2611441Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (229.67s)
```

- 2026-05-02

### Error 2026-05-02T01:24:13+00:00
```
2026-05-02T01:24:13.2690328Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-02T01:24:13.2695998Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-02T01:24:13.2816572Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-02T01:24:13.2817871Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-02T01:24:13.2818734Z         
2026-05-02T01:24:13.2819210Z         Error: Error in create
2026-05-02T01:24:13.2819679Z         
2026-05-02T01:24:13.2820301Z           with mongodbatlas_advanced_cluster.test,
2026-05-02T01:24:13.2821612Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-02T01:24:13.2823035Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-02T01:24:13.2823580Z         
2026-05-02T01:24:13.2824039Z         cluster name: test-acc-tf-c-5833478804747918409, API error details:
2026-05-02T01:24:13.2824792Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f54ae361aa98158bd8d9ae/clusters
2026-05-02T01:24:13.2825558Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-02T01:24:13.2826283Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-02T01:24:13.2827077Z         Conflict. Params: [], BadRequestDetail: 
2026-05-02T01:24:13.2828622Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (191.30s)
```

- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:38:53+00:00
```
2026-05-04T01:38:53.4237550Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T01:38:53.4240202Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T01:38:53.4316242Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T01:38:53.4316948Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-04T01:38:53.4317423Z         
2026-05-04T01:38:53.4317702Z         Error: Error in create
2026-05-04T01:38:53.4317970Z         
2026-05-04T01:38:53.4318381Z           with mongodbatlas_advanced_cluster.test,
2026-05-04T01:38:53.4319626Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-04T01:38:53.4320821Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-04T01:38:53.4321433Z         
2026-05-04T01:38:53.4322248Z         cluster name: test-acc-tf-c-6734663985836567696, API error details:
2026-05-04T01:38:53.4323136Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f7ee6dc8db7e025f537ba1/clusters
2026-05-04T01:38:53.4324147Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-04T01:38:53.4324857Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-04T01:38:53.4325399Z         Conflict. Params: [], BadRequestDetail: 
2026-05-04T01:38:53.4334754Z   
2026-05-04T01:38:53.4343257Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (194.14s)
```

- 2026-05-05

### Error 2026-05-05T02:16:14+00:00
```
2026-05-05T02:16:14.7612897Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T02:16:14.7616850Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T02:16:14.7671359Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T02:16:14.7672121Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-05T02:16:14.7672606Z         
2026-05-05T02:16:14.7674789Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f93f0f6d9c7064609c46eb/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7676272Z         
2026-05-05T02:16:14.7676788Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-05T02:16:14.7678044Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-05T02:16:14.7679130Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-05T02:16:14.7679552Z         
2026-05-05T02:16:14.7680088Z         Error: error creating resource
2026-05-05T02:16:14.7680388Z         
2026-05-05T02:16:14.7680862Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-05T02:16:14.7682043Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-05T02:16:14.7682867Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-05T02:16:14.7683262Z         
2026-05-05T02:16:14.7684032Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f93f0f6d9c7064609c46eb/streams/privateLinkConnections
2026-05-05T02:16:14.7684894Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-05T02:16:14.7685661Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-05T02:16:14.7686385Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-05T02:16:14.7687126Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-05T02:16:14.7687830Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-05T02:16:14.7688337Z         connection], BadRequestDetail: 
2026-05-05T02:16:14.7688817Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (1972.71s)
```

- 2026-05-06

### Error 2026-05-06T02:34:20+00:00
```
2026-05-06T02:34:20.7695969Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T02:34:20.7700772Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T02:34:20.7765925Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T02:34:20.7766749Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-06T02:34:20.7767241Z         
2026-05-06T02:34:20.7767539Z         Error: error creating resource
2026-05-06T02:34:20.7767824Z         
2026-05-06T02:34:20.7768242Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-06T02:34:20.7769047Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-06T02:34:20.7770109Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-06T02:34:20.7770498Z         
2026-05-06T02:34:20.7771195Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fa907a60f26af82a9bf7d8/streams/privateLinkConnections
2026-05-06T02:34:20.7771993Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-06T02:34:20.7772692Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-06T02:34:20.7773367Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-06T02:34:20.7774052Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-06T02:34:20.7774702Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-06T02:34:20.7775177Z         connection], BadRequestDetail: 
2026-05-06T02:34:20.7775645Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (3546.41s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-03 01:54](#error-2026-05-03t0154300000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69f69d45268a835f63e3b7bd/cloudProviderAccess | qa | 842.06s
[2026-05-04 17:36](#error-2026-05-04t1736300000) | VALIDATION_ERROR /api/atlas/v2/groups/69f8cb3f90e7e75f3bb7a3c4/streams/privateLinkConnections | qa | 760.03s
[2026-05-04 19:45](#error-2026-05-04t1945450000) | VALIDATION_ERROR /api/atlas/v2/groups/69f8eba7bc658e8fedce52ac/streams/privateLinkConnections | qa | 786.05s
[2026-05-05 08:42](#error-2026-05-05t0842320000) | VALIDATION_ERROR /api/atlas/v2/groups/69f9a21c036e3abdaa72b51f/streams/privateLinkConnections | qa | 719.05s
[2026-05-06 07:47](#error-2026-05-06t0747380000) | VALIDATION_ERROR /api/atlas/v2/groups/69fae4931954b6a279b8c494/streams/privateLinkConnections | qa | 726.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22: MISSING
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03

### Error 2026-05-03T01:54:30+00:00
```
2026-05-03T01:54:30.1642595Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-03T01:54:30.1646007Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-03T01:54:30.1736545Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-03T01:54:30.1737482Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-03T01:54:30.1737966Z         
2026-05-03T01:54:30.1740493Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f69d45268a835f63e3b7bd/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (9f613ecc-5d13-4573-b8d8-7e17847891e6). Reason: Conflict. Params: [9f613ecc-5d13-4573-b8d8-7e17847891e6], BadRequestDetail: 
2026-05-03T01:54:30.1744063Z         
2026-05-03T01:54:30.1744961Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-03T01:54:30.1746657Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-03T01:54:30.1748276Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-03T01:54:30.1749078Z         
2026-05-03T01:54:30.1749607Z         Error: error creating resource
2026-05-03T01:54:30.1749903Z         
2026-05-03T01:54:30.1750316Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-03T01:54:30.1751124Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-03T01:54:30.1751888Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-03T01:54:30.1752442Z         
2026-05-03T01:54:30.1753480Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f69d45268a835f63e3b7bd/streams/privateLinkConnections
2026-05-03T01:54:30.1754290Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-03T01:54:30.1754989Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-03T01:54:30.1755659Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-03T01:54:30.1756350Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-03T01:54:30.1757005Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-03T01:54:30.1757478Z         connection], BadRequestDetail: 
2026-05-03T01:54:30.1757946Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (842.57s)
```

- 2026-05-04
  - FAIL 12 minutes

### Error 2026-05-04T17:36:30+00:00
```
2026-05-04T17:36:30.4698391Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T17:36:30.4708829Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T17:36:30.4870726Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T17:36:30.4872210Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-04T17:36:30.4873035Z         
2026-05-04T17:36:30.4873561Z         Error: error creating resource
2026-05-04T17:36:30.4874080Z         
2026-05-04T17:36:30.4874825Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-04T17:36:30.4876305Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-04T17:36:30.4877747Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-04T17:36:30.4878419Z         
2026-05-04T17:36:30.4879652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb3f90e7e75f3bb7a3c4/streams/privateLinkConnections
2026-05-04T17:36:30.4881309Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-04T17:36:30.4882565Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-04T17:36:30.4883774Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-04T17:36:30.4884977Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-04T17:36:30.4886308Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-04T17:36:30.4887144Z         connection], BadRequestDetail: 
2026-05-04T17:36:30.4887959Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (760.32s)
```

  - FAIL 13 minutes

### Error 2026-05-04T19:45:45+00:00
```
2026-05-04T19:45:45.1273168Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T19:45:45.1274986Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T19:45:45.1363914Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-04T19:45:45.1364771Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-04T19:45:45.1365322Z         
2026-05-04T19:45:45.1365696Z         Error: error creating resource
2026-05-04T19:45:45.1366047Z         
2026-05-04T19:45:45.1366551Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-04T19:45:45.1367528Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-04T19:45:45.1368463Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-04T19:45:45.1369060Z         
2026-05-04T19:45:45.1369883Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8eba7bc658e8fedce52ac/streams/privateLinkConnections
2026-05-04T19:45:45.1370825Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-04T19:45:45.1371657Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-04T19:45:45.1372471Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-04T19:45:45.1373283Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-04T19:45:45.1374086Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-04T19:45:45.1374671Z         connection], BadRequestDetail: 
2026-05-04T19:45:45.1375244Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (786.54s)
```

- 2026-05-05

### Error 2026-05-05T08:42:32+00:00
```
2026-05-05T08:42:32.4334878Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T08:42:32.4337541Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T08:42:32.4406766Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-05T08:42:32.4407464Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-05T08:42:32.4407945Z         
2026-05-05T08:42:32.4408269Z         Error: error creating resource
2026-05-05T08:42:32.4408565Z         
2026-05-05T08:42:32.4409220Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-05T08:42:32.4410165Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-05T08:42:32.4410932Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-05T08:42:32.4411320Z         
2026-05-05T08:42:32.4412001Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f9a21c036e3abdaa72b51f/streams/privateLinkConnections
2026-05-05T08:42:32.4412783Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-05T08:42:32.4413478Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-05T08:42:32.4414153Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-05T08:42:32.4414827Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-05T08:42:32.4415474Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-05T08:42:32.4415948Z         connection], BadRequestDetail: 
2026-05-05T08:42:32.4416429Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (719.52s)
```

- 2026-05-06

### Error 2026-05-06T07:47:38+00:00
```
2026-05-06T07:47:38.5921847Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T07:47:38.5935648Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T07:47:38.5996579Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-06T07:47:38.5997275Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-06T07:47:38.5997733Z         
2026-05-06T07:47:38.5998028Z         Error: error creating resource
2026-05-06T07:47:38.5998323Z         
2026-05-06T07:47:38.5998722Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-06T07:47:38.5999505Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-06T07:47:38.6000250Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-06T07:47:38.6000630Z         
2026-05-06T07:47:38.6001281Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69fae4931954b6a279b8c494/streams/privateLinkConnections
2026-05-06T07:47:38.6002055Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-06T07:47:38.6002731Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-06T07:47:38.6003388Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-06T07:47:38.6004040Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-06T07:47:38.6005102Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-06T07:47:38.6005580Z         connection], BadRequestDetail: 
2026-05-06T07:47:38.6006034Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (726.11s)
```

