# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStorage Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 01:54](#error-2026-09-04t0154490000) |  | dev | 2.09s

### Timeline
- 2026-09-01: MISSING
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

- 2026-09-05 PASS 5 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 3 minutes
- 2026-09-08 PASS 4 minutes
- 2026-09-09 PASS 4 minutes
- 2026-09-10 PASS 3 minutes
- 2026-09-11
  - PASS 3 minutes
  - PASS 5 minutes
- 2026-09-12 PASS 4 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 3 minutes
- 2026-09-15 PASS 4 minutes
- 2026-09-16 PASS 3 minutes
- 2026-09-17 PASS 4 minutes
- 2026-09-18 PASS 3 minutes
- 2026-09-19 PASS 3 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 4 minutes
- 2026-09-22 PASS 4 minutes
- 2026-09-23 PASS 3 minutes
- 2026-09-24 PASS 4 minutes
- 2026-09-25 PASS 4 minutes
- 2026-09-26 PASS 4 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 4 minutes
- 2026-09-29
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 4 minutes
- 2026-09-30
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-10-01 PASS 5 minutes
- 2026-10-02 PASS 4 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 3 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 3 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 4 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 4 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 4 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
