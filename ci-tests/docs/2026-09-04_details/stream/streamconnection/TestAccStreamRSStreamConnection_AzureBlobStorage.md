# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStorage Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-19 01:24](#error-2026-08-19t0124290000) |  | dev | 26.05s
[2026-09-04 01:54](#error-2026-09-04t0154490000) |  | dev | 2.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes
- 2026-08-08 PASS 3 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 3 minutes
- 2026-08-11 PASS 3 minutes
- 2026-08-12 PASS 3 minutes
- 2026-08-13 PASS 4 minutes
- 2026-08-14 PASS 4 minutes
- 2026-08-15 PASS 3 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 3 minutes
- 2026-08-18 PASS 3 minutes
- 2026-08-19

### Error 2026-08-19T01:24:29+00:00
```
2026-08-19T01:24:29.5620192Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-08-19T01:24:29.5626611Z    test_name=TestAccStreamRSStreamConnection_AzureBlobStorage test_terraform_path=/home/runner/work/_temp/fe49e84f-78bf-4b5b-9ccb-04458b2e970e/terraform
2026-08-19T01:24:29.5627376Z     resource_stream_connection_test.go:1449: Step 1/2 error: Error running apply: exit status 1
2026-08-19T01:24:29.5627818Z         
2026-08-19T01:24:29.5629124Z         Error: creating "Resource Group (Subscription: \"***\"\nResource Group Name: \"test-acc-tf-9196222147997111405\")": Put "https://management.azure.com/subscriptions/***/resourceGroups/test-acc-tf-9196222147997111405?api-version=2023-07-01": HTTP response was nil; connection may have been reset
2026-08-19T01:24:29.5629971Z         
2026-08-19T01:24:29.5630316Z           with azurerm_resource_group.blob_rg,
2026-08-19T01:24:29.5630868Z           on terraform_plugin_test.tf line 53, in resource "azurerm_resource_group" "blob_rg":
2026-08-19T01:24:29.5631388Z           53: 		resource "azurerm_resource_group" "blob_rg" {
2026-08-19T01:24:29.5631714Z         
2026-08-19T01:24:29.5632226Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (26.53s)
```

- 2026-08-20 PASS 4 minutes
- 2026-08-21 PASS 3 minutes
- 2026-08-22 PASS 3 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 4 minutes
- 2026-08-25 PASS 3 minutes
- 2026-08-26 PASS 4 minutes
- 2026-08-27 PASS 3 minutes
- 2026-08-28
  - PASS 3 minutes
  - PASS 4 minutes
- 2026-08-29 PASS 4 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 3 minutes
- 2026-09-01 PASS 3 minutes
- 2026-09-02 PASS 4 minutes
- 2026-09-03 PASS 4 minutes
- 2026-09-04

### Error 2026-09-04T01:54:49+00:00
```
2026-09-04T01:54:49.7170799Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-09-04T01:54:49.7182273Z   
2026-09-04T01:54:49.7182854Z     resource_stream_connection_test.go:1596: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-04T01:54:49.7183387Z         
2026-09-04T01:54:49.7187870Z         Error: building account: could not acquire access token to parse claims: clientCredentialsToken: received HTTP status 401 with response: {"error":"invalid_client","error_description":"AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: bb15b8d5-2f4a-42f7-8467-160d74b6f000 Correlation ID: 207b7466-1bd4-47f7-be07-9e2244ff20a7 Timestamp: 2026-09-04 01:51:03Z","error_codes":[7000222],"timestamp":"2026-09-04 01:51:03Z","trace_id":"bb15b8d5-2f4a-42f7-8467-160d74b6f000","correlation_id":"207b7466-1bd4-47f7-be07-9e2244ff20a7","error_uri":"https://login.microsoftonline.com/error?code=7000222"}
2026-09-04T01:54:49.7190987Z         
2026-09-04T01:54:49.7191481Z           with provider["registry.terraform.io/hashicorp/azurerm"],
2026-09-04T01:54:49.7192161Z           on terraform_plugin_test.tf line 23, in provider "azurerm":
2026-09-04T01:54:49.7192664Z           23: 		provider "azurerm" {
2026-09-04T01:54:49.7192987Z         
2026-09-04T01:54:49.7193355Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (2.92s)
```


## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 3 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 4 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 3 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 3 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 3 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 4 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
