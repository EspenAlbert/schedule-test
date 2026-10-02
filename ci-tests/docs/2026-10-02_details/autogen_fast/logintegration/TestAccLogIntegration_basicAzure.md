# autogen_fast/logintegration/TestAccLogIntegration_basicAzure Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-04 00:44](#error-2026-09-04t0044450000) |  | dev | 7.03s
[2026-09-23 00:46](#error-2026-09-23t0046260000) |  | dev | 206.05s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 5 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 4 minutes
- 2026-09-08 PASS 4 minutes
- 2026-09-09 PASS 5 minutes
- 2026-09-10 PASS 5 minutes
- 2026-09-11 PASS 4 minutes
- 2026-09-12 PASS 5 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 4 minutes
- 2026-09-15 PASS 5 minutes
- 2026-09-16 PASS 4 minutes
- 2026-09-17 PASS 4 minutes
- 2026-09-18 PASS 4 minutes
- 2026-09-19 PASS 4 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 4 minutes
- 2026-09-22 PASS 4 minutes
- 2026-09-23
  - FAIL 3 minutes

### Error 2026-09-23T00:46:26+00:00
```
2026-09-23T00:46:26.7159047Z === RUN   TestAccLogIntegration_basicAzure
2026-09-23T00:46:26.7254542Z === CONT  TestAccLogIntegration_basicAzure
2026-09-23T00:46:26.7274378Z === NAME  TestAccLogIntegration_basicAzure
2026-09-23T00:46:26.7276323Z     resource_test.go:131: Step 1/3 error: After applying this test step, the refresh plan was not empty.
2026-09-23T00:46:26.7277406Z         stdout
2026-09-23T00:46:26.7277928Z         
2026-09-23T00:46:26.7279454Z         Terraform used the selected providers to generate the following execution
2026-09-23T00:46:26.7280854Z         plan. Resource actions are indicated with the following symbols:
2026-09-23T00:46:26.7281810Z           ~ update in-place
2026-09-23T00:46:26.7282399Z         
2026-09-23T00:46:26.7283173Z         Terraform will perform the following actions:
2026-09-23T00:46:26.7283891Z         
2026-09-23T00:46:26.7284812Z           # azurerm_resource_group.log_rg will be updated in-place
2026-09-23T00:46:26.7286170Z           ~ resource "azurerm_resource_group" "log_rg" {
2026-09-23T00:46:26.7288292Z                 id         = "/subscriptions/***/resourceGroups/test-acc-tf-4618373266596008911"
2026-09-23T00:46:26.7289698Z                 name       = "test-acc-tf-4618373266596008911"
2026-09-23T00:46:26.7290580Z               ~ tags       = {
2026-09-23T00:46:26.7291584Z                   - "isleakeditem" = "true" -> null
2026-09-23T00:46:26.7292339Z                 }
2026-09-23T00:46:26.7293232Z                 # (2 unchanged attributes hidden)
2026-09-23T00:46:26.7293944Z             }
2026-09-23T00:46:26.7294440Z         
2026-09-23T00:46:26.7295165Z         Plan: 0 to add, 1 to change, 0 to destroy.
2026-09-23T00:46:26.7296251Z --- FAIL: TestAccLogIntegration_basicAzure (206.51s)
```

  - PASS 5 minutes
- 2026-09-24 PASS 5 minutes
- 2026-09-25 PASS 4 minutes
- 2026-09-26 PASS 4 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 5 minutes
- 2026-09-29
  - PASS 5 minutes
  - PASS 4 minutes
- 2026-09-30 PASS 5 minutes
- 2026-10-01 PASS 5 minutes
- 2026-10-02 PASS 5 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 4 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 4 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 5 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 5 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 4 minutes
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
