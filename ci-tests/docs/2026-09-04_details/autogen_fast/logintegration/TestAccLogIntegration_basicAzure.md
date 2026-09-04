# autogen_fast/logintegration/TestAccLogIntegration_basicAzure Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:44](#error-2026-09-04t0044450000) |  | dev | 7.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes
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
- 2026-08-28 PASS 3 minutes
- 2026-08-29 PASS 4 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 3 minutes
- 2026-09-01 PASS 4 minutes
- 2026-09-02 PASS 4 minutes
- 2026-09-03 PASS 5 minutes
- 2026-09-04
  - FAIL 7 seconds

### Error 2026-09-04T00:44:45+00:00
```
2026-09-04T00:44:45.8868925Z === RUN   TestAccLogIntegration_basicAzure
2026-09-04T00:44:45.8963177Z === CONT  TestAccLogIntegration_basicAzure
2026-09-04T00:44:45.8976357Z   
2026-09-04T00:44:45.8977050Z     resource_test.go:131: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-09-04T00:44:45.8977797Z         
2026-09-04T00:44:45.8981931Z         Error: building account: could not acquire access token to parse claims: clientCredentialsToken: received HTTP status 401 with response: {"error":"invalid_client","error_description":"AADSTS7000222: The provided client secret keys for app '***' are expired. Visit the Azure portal to create new keys for your app: https://aka.ms/NewClientSecret, or consider using certificate credentials for added security: https://aka.ms/certCreds. Trace ID: 7cc01f20-bb4c-4ce9-9854-fdfb0bbfe300 Correlation ID: f1a148bc-ef48-492a-927c-065619f8d8cb Timestamp: 2026-09-04 00:41:34Z","error_codes":[7000222],"timestamp":"2026-09-04 00:41:34Z","trace_id":"7cc01f20-bb4c-4ce9-9854-fdfb0bbfe300","correlation_id":"f1a148bc-ef48-492a-927c-065619f8d8cb","error_uri":"https://login.microsoftonline.com/error?code=7000222"}
2026-09-04T00:44:45.8984575Z         
2026-09-04T00:44:45.8985307Z           with provider["registry.terraform.io/hashicorp/azurerm"],
2026-09-04T00:44:45.8986084Z           on terraform_plugin_test.tf line 17, in provider "azurerm":
2026-09-04T00:44:45.8986721Z           17: 		provider "azurerm" {
2026-09-04T00:44:45.8987319Z         
2026-09-04T00:44:45.8987829Z --- FAIL: TestAccLogIntegration_basicAzure (7.34s)
```

  - PASS 5 minutes

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
- 2026-08-30 PASS 4 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
