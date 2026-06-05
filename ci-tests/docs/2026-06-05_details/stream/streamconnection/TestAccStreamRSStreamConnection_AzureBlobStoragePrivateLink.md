# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 13)
Success rate: 62.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 02:51](#error-2026-05-07t0251440000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69fbe2dd2cf714be1a368f52/cloudProviderAccess | dev |  | 2953.07s
[2026-05-07 10:32](#error-2026-05-07t1032420000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69fc5c76f696c64139d0b25b/clusters | dev | out_of_capacity | 191.02s
[2026-05-08 02:03](#error-2026-05-08t0203590000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69fd345b085055a4bc25e916/cloudProviderAccess | dev | flaky_500 | 1880.04s
[2026-05-12 01:35](#error-2026-05-12t0135520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a027a004f95680fd525c08f/clusters | dev | out_of_capacity | 167.09s
[2026-05-13 02:09](#error-2026-05-13t0209440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a03cca6c2214ad0d19979bd/clusters | dev | out_of_capacity | 189.03s
[2026-05-14 02:05](#error-2026-05-14t0205340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a051e90feb8c205547ec095/clusters | dev | out_of_capacity | 163.09s
[2026-05-20 01:51](#error-2026-05-20t0151330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0d084476fe0c449bbefb93/clusters | dev | out_of_capacity | 183.09s
[2026-05-20 13:17](#error-2026-05-20t1317060000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0da99b90cc02021d0e3cfe/clusters | dev | out_of_capacity | 186.09s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0e59c4a2ebcd59a4f03da8/clusters | dev | out_of_capacity | 180.03s
[2026-05-22 03:03](#error-2026-05-22t0303430000) | STREAM_PRIVATE_LINK_IN_USE /api/atlas/v2/groups/6a0faabd372e35d169843244/streams/privateLinkConnections/6a0fbe5a372e35d1698b6d4e | dev | timeout | 4277.04s
[2026-05-27 03:19](#error-2026-05-27t0319540000) | STREAM_PRIVATE_LINK_IN_USE /api/atlas/v2/groups/6a1642b605489c7dc3ce66a7/streams/privateLinkConnections/6a165b1f58ff685d790a727a | dev | timeout | 3870.03s
[2026-06-05 02:04](#error-2026-06-05t0204420000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a2220e6770de8903f191ccd/clusters | dev | out_of_capacity | 164.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 49 minutes

### Error 2026-05-07T02:51:44+00:00
```
2026-05-07T02:51:44.8400912Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T02:51:44.8405985Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T02:51:44.8534286Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T02:51:44.8535531Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-07T02:51:44.8536363Z         
2026-05-07T02:51:44.8540297Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fbe2dd2cf714be1a368f52/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Conflict. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-05-07T02:51:44.8542330Z         
2026-05-07T02:51:44.8542856Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-07T02:51:44.8544351Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-07T02:51:44.8545284Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-07T02:51:44.8545728Z         
2026-05-07T02:51:44.8546266Z         Error: error creating resource
2026-05-07T02:51:44.8546754Z         
2026-05-07T02:51:44.8547198Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-07T02:51:44.8548453Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-07T02:51:44.8549427Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-07T02:51:44.8549842Z         
2026-05-07T02:51:44.8550570Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fbe2dd2cf714be1a368f52/streams/privateLinkConnections
2026-05-07T02:51:44.8551427Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-07T02:51:44.8552166Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-07T02:51:44.8552883Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-07T02:51:44.8553595Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-07T02:51:44.8554287Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-07T02:51:44.8554784Z         connection], BadRequestDetail: 
2026-05-07T02:51:44.8555274Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (2953.71s)
```

  - FAIL 3 minutes

### Error 2026-05-07T10:32:42+00:00
```
2026-05-07T10:32:42.9718578Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T10:32:42.9728025Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T10:32:42.9797294Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-07T10:32:42.9798136Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-07T10:32:42.9798613Z         
2026-05-07T10:32:42.9798899Z         Error: Error in create
2026-05-07T10:32:42.9799180Z         
2026-05-07T10:32:42.9799537Z           with mongodbatlas_advanced_cluster.test,
2026-05-07T10:32:42.9800209Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-07T10:32:42.9800832Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-07T10:32:42.9801185Z         
2026-05-07T10:32:42.9801627Z         cluster name: test-acc-tf-c-7255876441741786014, API error details:
2026-05-07T10:32:42.9802310Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c76f696c64139d0b25b/clusters
2026-05-07T10:32:42.9802997Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-07T10:32:42.9803660Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-07T10:32:42.9804175Z         Conflict. Params: [], BadRequestDetail: 
2026-05-07T10:32:42.9812443Z    test_step_number=1 test_name=TestAccStreamRSStreamConnection_AzureBlobStorage test_terraform_path=/home/runner/work/_temp/1d8fb31c-b367-43e4-97ad-ec8b52a3f105/terraform
2026-05-07T10:32:42.9821805Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (191.22s)
```

- 2026-05-08

### Error 2026-05-08T02:03:59+00:00
```
2026-05-08T02:03:59.5289112Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-08T02:03:59.5292788Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-08T02:03:59.5349532Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-08T02:03:59.5350242Z     resource_stream_connection_test.go:1344: Step 1/2 error: Error running apply: exit status 1
2026-05-08T02:03:59.5350706Z         
2026-05-08T02:03:59.5353298Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fd345b085055a4bc25e916/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Conflict. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-05-08T02:03:59.5355032Z         
2026-05-08T02:03:59.5355500Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-08T02:03:59.5356352Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-08T02:03:59.5357159Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-08T02:03:59.5357567Z         
2026-05-08T02:03:59.5358087Z         Error: error creating resource
2026-05-08T02:03:59.5358380Z         
2026-05-08T02:03:59.5358784Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-05-08T02:03:59.5359566Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-05-08T02:03:59.5360307Z           94: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-05-08T02:03:59.5360688Z         
2026-05-08T02:03:59.5361354Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fd345b085055a4bc25e916/streams/privateLinkConnections
2026-05-08T02:03:59.5362298Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-05-08T02:03:59.5363003Z         request content produced the validation error: You must have an Atlas Cluster
2026-05-08T02:03:59.5363662Z         on Azure or Azure Network Peering configured to create a Private Link
2026-05-08T02:03:59.5364487Z         connection. Reason: Bad Request. Params: [You must have an Atlas Cluster on
2026-05-08T02:03:59.5365123Z         Azure or Azure Network Peering configured to create a Private Link
2026-05-08T02:03:59.5365592Z         connection], BadRequestDetail: 
2026-05-08T02:03:59.5366056Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (1880.39s)
```

- 2026-05-09
  - PASS 48 minutes
  - PASS 41 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 33 minutes
- 2026-05-12

### Error 2026-05-12T01:35:52+00:00
```
2026-05-12T01:35:52.3813976Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-12T01:35:52.3816877Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-12T01:35:52.3851865Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-12T01:35:52.3852634Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-12T01:35:52.3853116Z         
2026-05-12T01:35:52.3853417Z         Error: Error in create
2026-05-12T01:35:52.3853702Z         
2026-05-12T01:35:52.3854082Z           with mongodbatlas_advanced_cluster.test,
2026-05-12T01:35:52.3854974Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-12T01:35:52.3855645Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-12T01:35:52.3856002Z         
2026-05-12T01:35:52.3856460Z         cluster name: test-acc-tf-c-135582295403669052, API error details:
2026-05-12T01:35:52.3857179Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a027a004f95680fd525c08f/clusters
2026-05-12T01:35:52.3858076Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-12T01:35:52.3858781Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-12T01:35:52.3859332Z         Conflict. Params: [], BadRequestDetail: 
2026-05-12T01:35:52.3865182Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (167.95s)
```

- 2026-05-13

### Error 2026-05-13T02:09:44+00:00
```
2026-05-13T02:09:44.9797237Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-13T02:09:44.9799545Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-13T02:09:44.9842554Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-13T02:09:44.9843256Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-13T02:09:44.9843720Z         
2026-05-13T02:09:44.9843991Z         Error: Error in create
2026-05-13T02:09:44.9844262Z         
2026-05-13T02:09:44.9844610Z           with mongodbatlas_advanced_cluster.test,
2026-05-13T02:09:44.9845306Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-13T02:09:44.9847118Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-13T02:09:44.9847659Z         
2026-05-13T02:09:44.9848125Z         cluster name: test-acc-tf-c-2933587060503740134, API error details:
2026-05-13T02:09:44.9848870Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a03cca6c2214ad0d19979bd/clusters
2026-05-13T02:09:44.9849613Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-13T02:09:44.9850322Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-13T02:09:44.9850870Z         Conflict. Params: [], BadRequestDetail: 
2026-05-13T02:09:44.9851822Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (189.29s)
```

- 2026-05-14

### Error 2026-05-14T02:05:34+00:00
```
2026-05-14T02:05:34.9675206Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-14T02:05:34.9677031Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-14T02:05:34.9719767Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-14T02:05:34.9720762Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-14T02:05:34.9721520Z         
2026-05-14T02:05:34.9721958Z         Error: Error in create
2026-05-14T02:05:34.9722451Z         
2026-05-14T02:05:34.9722839Z           with mongodbatlas_advanced_cluster.test,
2026-05-14T02:05:34.9723566Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-14T02:05:34.9724227Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-14T02:05:34.9724568Z         
2026-05-14T02:05:34.9725024Z         cluster name: test-acc-tf-c-1514942557677188576, API error details:
2026-05-14T02:05:34.9725757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a051e90feb8c205547ec095/clusters
2026-05-14T02:05:34.9726811Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-14T02:05:34.9727973Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-14T02:05:34.9728695Z         Conflict. Params: [], BadRequestDetail: 
2026-05-14T02:05:34.9729183Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (163.86s)
```

- 2026-05-15 PASS 33 minutes
- 2026-05-16 PASS 31 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 46 minutes
- 2026-05-19 PASS 27 minutes
- 2026-05-20
  - FAIL 3 minutes

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2369409Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T01:51:33.2375311Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T01:51:33.2425046Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T01:51:33.2425912Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2426487Z         
2026-05-20T01:51:33.2426818Z         Error: Error in create
2026-05-20T01:51:33.2427140Z         
2026-05-20T01:51:33.2427574Z           with mongodbatlas_advanced_cluster.test,
2026-05-20T01:51:33.2428441Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-20T01:51:33.2429252Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-20T01:51:33.2429674Z         
2026-05-20T01:51:33.2430226Z         cluster name: test-acc-tf-c-7234585159184783587, API error details:
2026-05-20T01:51:33.2431241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0d084476fe0c449bbefb93/clusters
2026-05-20T01:51:33.2432144Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-20T01:51:33.2433015Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-20T01:51:33.2433693Z         Conflict. Params: [], BadRequestDetail: 
2026-05-20T01:51:33.2434286Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (183.93s)
```

  - FAIL 3 minutes

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2485923Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T13:17:06.2490241Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T13:17:06.2555591Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-20T13:17:06.2556683Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2557407Z         
2026-05-20T13:17:06.2557840Z         Error: Error in create
2026-05-20T13:17:06.2558267Z         
2026-05-20T13:17:06.2558831Z           with mongodbatlas_advanced_cluster.test,
2026-05-20T13:17:06.2559932Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-20T13:17:06.2560957Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-20T13:17:06.2561647Z         
2026-05-20T13:17:06.2562359Z         cluster name: test-acc-tf-c-8925756290634154066, API error details:
2026-05-20T13:17:06.2563501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0da99b90cc02021d0e3cfe/clusters
2026-05-20T13:17:06.2564646Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-20T13:17:06.2565900Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-20T13:17:06.2566757Z         Conflict. Params: [], BadRequestDetail: 
2026-05-20T13:17:06.2568284Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (186.90s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6243020Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-21T01:56:32.6245877Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-21T01:56:32.6287081Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-21T01:56:32.6287943Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6288433Z         
2026-05-21T01:56:32.6288718Z         Error: Error in create
2026-05-21T01:56:32.6289006Z         
2026-05-21T01:56:32.6289369Z           with mongodbatlas_advanced_cluster.test,
2026-05-21T01:56:32.6290068Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-21T01:56:32.6290722Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-21T01:56:32.6291071Z         
2026-05-21T01:56:32.6291531Z         cluster name: test-acc-tf-c-2096829844136125803, API error details:
2026-05-21T01:56:32.6292249Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0e59c4a2ebcd59a4f03da8/clusters
2026-05-21T01:56:32.6292970Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-21T01:56:32.6293657Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-21T01:56:32.6294221Z         Conflict. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6295186Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (180.28s)
```

- 2026-05-22

### Error 2026-05-22T03:03:43+00:00
```
2026-05-22T03:03:43.9807473Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-22T03:03:43.9809546Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-22T03:03:43.9851952Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-22T03:03:43.9852493Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-22T03:03:43.9852861Z         
2026-05-22T03:03:43.9853174Z         Error: error waiting for stream connection to be ready
2026-05-22T03:03:43.9853454Z         
2026-05-22T03:03:43.9853742Z           with mongodbatlas_stream_connection.test,
2026-05-22T03:03:43.9854297Z           on terraform_plugin_test.tf line 113, in resource "mongodbatlas_stream_connection" "test":
2026-05-22T03:03:43.9854996Z          113: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-22T03:03:43.9855281Z         
2026-05-22T03:03:43.9855646Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-22T03:03:43.9856014Z         'PENDING', timeout: 20m0s)
2026-05-22T03:03:43.9866734Z   
2026-05-22T03:03:43.9867159Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-22T03:03:43.9867538Z         
2026-05-22T03:03:43.9867790Z         Error: error deleting resource
2026-05-22T03:03:43.9868024Z         
2026-05-22T03:03:43.9868675Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0faabd372e35d169843244/streams/privateLinkConnections/6a0fbe5a372e35d1698b6d4e
2026-05-22T03:03:43.9869352Z         DELETE: HTTP 400 Bad Request (Error code: "STREAM_PRIVATE_LINK_IN_USE")
2026-05-22T03:03:43.9869886Z         Detail: Private Link with connection ID (6a0fbe5a372e35d1698b6d4e) is in use.
2026-05-22T03:03:43.9870432Z         Reason: Bad Request. Params: [6a0fbe5a372e35d1698b6d4e], BadRequestDetail: 
2026-05-22T03:03:43.9870884Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4277.42s)
```

- 2026-05-23 PASS 33 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 34 minutes
- 2026-05-26 PASS 31 minutes
- 2026-05-27

### Error 2026-05-27T03:19:54+00:00
```
2026-05-27T03:19:54.8062649Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-27T03:19:54.8063859Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-27T03:19:54.8073975Z    test_terraform_path=/home/runner/work/_temp/f8bd4eb8-de34-4065-ad5e-5619fe22256b/terraform test_working_directory=/tmp/plugintest283480572
2026-05-27T03:19:54.8074924Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-05-27T03:19:54.8075421Z         
2026-05-27T03:19:54.8075826Z         Error: error waiting for stream connection to be ready
2026-05-27T03:19:54.8076180Z         
2026-05-27T03:19:54.8076548Z           with mongodbatlas_stream_connection.test,
2026-05-27T03:19:54.8077279Z           on terraform_plugin_test.tf line 113, in resource "mongodbatlas_stream_connection" "test":
2026-05-27T03:19:54.8077953Z          113: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-27T03:19:54.8078313Z         
2026-05-27T03:19:54.8078781Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-27T03:19:54.8079259Z         'PENDING', timeout: 20m0s)
2026-05-27T03:19:54.8092216Z   
2026-05-27T03:19:54.8092748Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-27T03:19:54.8093240Z         
2026-05-27T03:19:54.8093552Z         Error: error deleting resource
2026-05-27T03:19:54.8093860Z         
2026-05-27T03:19:54.8094684Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1642b605489c7dc3ce66a7/streams/privateLinkConnections/6a165b1f58ff685d790a727a
2026-05-27T03:19:54.8095578Z         DELETE: HTTP 400 Bad Request (Error code: "STREAM_PRIVATE_LINK_IN_USE")
2026-05-27T03:19:54.8096262Z         Detail: Private Link with connection ID (6a165b1f58ff685d790a727a) is in use.
2026-05-27T03:19:54.8096956Z         Reason: Bad Request. Params: [6a165b1f58ff685d790a727a], BadRequestDetail: 
2026-05-27T03:19:54.8097552Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (3870.29s)
```

- 2026-05-28 PASS 38 minutes
- 2026-05-29 PASS 44 minutes
- 2026-05-30 PASS 25 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 39 minutes
- 2026-06-02 PASS 31 minutes
- 2026-06-03 PASS 45 minutes
- 2026-06-04 PASS 47 minutes
- 2026-06-05

### Error 2026-06-05T02:04:42+00:00
```
2026-06-05T02:04:42.4868916Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-06-05T02:04:42.4870017Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-06-05T02:04:42.4884238Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/4d5523eb-a108-4702-83ed-bf4de6ff292a/terraform
2026-06-05T02:04:42.4885180Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-06-05T02:04:42.4885675Z         
2026-06-05T02:04:42.4885972Z         Error: Error in create
2026-06-05T02:04:42.4886269Z         
2026-06-05T02:04:42.4886646Z           with mongodbatlas_advanced_cluster.test,
2026-06-05T02:04:42.4887377Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-05T02:04:42.4888067Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-05T02:04:42.4888440Z         
2026-06-05T02:04:42.4888914Z         cluster name: test-acc-tf-c-5349492453568146255, API error details:
2026-06-05T02:04:42.4889680Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e6770de8903f191ccd/clusters
2026-06-05T02:04:42.4890452Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-05T02:04:42.4891196Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-05T02:04:42.4891877Z         Conflict. Params: [], BadRequestDetail: 
2026-06-05T02:04:42.4892618Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (164.37s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 02:24](#error-2026-05-10t0224520000) |  | qa | timeout | 2408.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T02:24:52+00:00
```
2026-05-10T02:24:52.0928803Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-10T02:24:52.0936669Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-10T02:24:52.0999941Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-05-10T02:24:52.1001843Z     resource_stream_connection_test.go:1354: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-10T02:24:52.1002893Z         
2026-05-10T02:24:52.1003432Z         Error: error deleting resource
2026-05-10T02:24:52.1003949Z         
2026-05-10T02:24:52.1004828Z         timeout while waiting for state to become 'NOT_FOUND, FAILED' (last state:
2026-05-10T02:24:52.1005694Z         'DELETING', timeout: 20m0s)
2026-05-10T02:24:52.1006513Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (2408.67s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 26 minutes
- 2026-05-25 PASS 31 minutes
- 2026-05-26 PASS 29 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 26 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
