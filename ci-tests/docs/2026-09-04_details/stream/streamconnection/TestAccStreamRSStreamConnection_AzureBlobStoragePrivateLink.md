# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL(x 2)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 05:41](#error-2026-08-28t0541400000) | STREAM_PRIVATE_LINK_IN_USE /api/atlas/v2/groups/6a90fbc163fde9550ed24dd7/streams/privateLinkConnections/6a9114d863fde9550edae28a | dev | timeout | 3397.02s
[2026-09-04 01:54](#error-2026-09-04t0154490000) |  | dev | flaky_500 | 2.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 25 minutes
- 2026-08-07 PASS 38 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28
  - FAIL 56 minutes

### Error 2026-08-28T05:41:40+00:00
```
2026-08-28T05:41:40.9398216Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-08-28T05:41:40.9399535Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-08-28T05:41:40.9410716Z    test_working_directory=/tmp/plugintest1731070460
2026-08-28T05:41:40.9411414Z     resource_stream_connection_test.go:1638: Step 1/2 error: Error running apply: exit status 1
2026-08-28T05:41:40.9411911Z         
2026-08-28T05:41:40.9412337Z         Error: error waiting for stream connection to be ready
2026-08-28T05:41:40.9412728Z         
2026-08-28T05:41:40.9413123Z           with mongodbatlas_stream_connection.test,
2026-08-28T05:41:40.9413891Z           on terraform_plugin_test.tf line 113, in resource "mongodbatlas_stream_connection" "test":
2026-08-28T05:41:40.9414606Z          113: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-28T05:41:40.9414983Z         
2026-08-28T05:41:40.9415481Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-08-28T05:41:40.9415981Z         'PENDING', timeout: 40m0s)
2026-08-28T05:41:40.9428796Z   
2026-08-28T05:41:40.9429724Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-28T05:41:40.9430919Z         
2026-08-28T05:41:40.9431483Z         Error: error deleting resource
2026-08-28T05:41:40.9431812Z         
2026-08-28T05:41:40.9432689Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbc163fde9550ed24dd7/streams/privateLinkConnections/6a9114d863fde9550edae28a
2026-08-28T05:41:40.9433623Z         DELETE: HTTP 400 Bad Request (Error code: "STREAM_PRIVATE_LINK_IN_USE")
2026-08-28T05:41:40.9434356Z         Detail: Private Link with connection ID (6a9114d863fde9550edae28a) is in use.
2026-08-28T05:41:40.9435088Z         Reason: Bad Request. Params: [6a9114d863fde9550edae28a], BadRequestDetail: 
2026-08-28T05:41:40.9435712Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (3397.24s)
```

  - PASS 39 minutes
- 2026-08-29 PASS 27 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 39 minutes
- 2026-09-01 PASS 28 minutes
- 2026-09-02 PASS 47 minutes
- 2026-09-03 PASS an hour
- 2026-09-04

### Error 2026-09-04T01:54:49+00:00
```
2026-09-04T01:54:49.7193894Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-04T01:54:49.7194963Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-09-04T01:54:49.7206396Z   
2026-09-04T01:54:49.7206981Z     resource_stream_connection_test.go:1636: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-04T01:54:49.7207507Z         
2026-09-04T01:54:49.7212083Z         Error: building account: could not acquire access token to parse claims: clientCredentialsToken: received HTTP status 401 with response: {"error":"invalid_client","error_description":"AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 404f588b-abe2-4e51-8cdf-8406b65c1500 Correlation ID: 86c99e2c-3387-4fa6-bb97-e5640112ff39 Timestamp: 2026-09-04 01:51:06Z","error_codes":[7000222],"timestamp":"2026-09-04 01:51:06Z","trace_id":"404f588b-abe2-4e51-8cdf-8406b65c1500","correlation_id":"86c99e2c-3387-4fa6-bb97-e5640112ff39","error_uri":"https://login.microsoftonline.com/error?code=7000222"}
2026-09-04T01:54:49.7214785Z         
2026-09-04T01:54:49.7215276Z           with provider["registry.terraform.io/hashicorp/azurerm"],
2026-09-04T01:54:49.7215919Z           on terraform_plugin_test.tf line 23, in provider "azurerm":
2026-09-04T01:54:49.7216409Z           23: 		provider "azurerm" {
2026-09-04T01:54:49.7216730Z         
2026-09-04T01:54:49.7217158Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (2.93s)
```


## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 25 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
