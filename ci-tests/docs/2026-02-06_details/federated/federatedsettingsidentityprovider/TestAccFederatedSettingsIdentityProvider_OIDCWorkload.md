# federated/federatedsettingsidentityprovider/TestAccFederatedSettingsIdentityProvider_OIDCWorkload Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-13 00:49](#error-2026-01-13t0049010000) | VALIDATION_ERROR /api/atlas/v2/federationSettings/65ba5f108c173e782d2ba9bc/identityProviders | dev | 1.01s
[2026-01-14 00:47](#error-2026-01-14t0047210000) | VALIDATION_ERROR /api/atlas/v2/federationSettings/65ba5f108c173e782d2ba9bc/identityProviders | dev | 1.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09 PASS 6 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 6 seconds
- 2026-01-13

### Error 2026-01-13T00:49:01+00:00
```
2026-01-13T00:49:01.1829662Z === RUN   TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-13T00:49:01.1831077Z === CONT  TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-13T00:49:01.1847705Z === NAME  TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-13T00:49:01.1848426Z     resource_federated_settings_identity_provider_test.go:47: Step 1/3 error: Error running apply: exit status 1
2026-01-13T00:49:01.1848925Z         
2026-01-13T00:49:01.1850815Z         Error: error creating federation settings identity provider (65ba5f108c173e782d2ba9bc): https://cloud-dev.mongodb.com/api/atlas/v2/federationSettings/65ba5f108c173e782d2ba9bc/identityProviders POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-13T00:49:01.1852014Z         
2026-01-13T00:49:01.1852444Z           with mongodbatlas_federated_settings_identity_provider.test,
2026-01-13T00:49:01.1853280Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_federated_settings_identity_provider" "test":
2026-01-13T00:49:01.1854076Z           12: 	resource "mongodbatlas_federated_settings_identity_provider" "test" {
2026-01-13T00:49:01.1854475Z         
2026-01-13T00:49:01.1856003Z --- FAIL: TestAccFederatedSettingsIdentityProvider_OIDCWorkload (1.11s)
```

- 2026-01-14

### Error 2026-01-14T00:47:21+00:00
```
2026-01-14T00:47:21.8879996Z === RUN   TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-14T00:47:21.8881607Z === CONT  TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-14T00:47:21.8898460Z === NAME  TestAccFederatedSettingsIdentityProvider_OIDCWorkload
2026-01-14T00:47:21.8899268Z     resource_federated_settings_identity_provider_test.go:47: Step 1/3 error: Error running apply: exit status 1
2026-01-14T00:47:21.8899786Z         
2026-01-14T00:47:21.8901470Z         Error: error creating federation settings identity provider (65ba5f108c173e782d2ba9bc): https://cloud-dev.mongodb.com/api/atlas/v2/federationSettings/65ba5f108c173e782d2ba9bc/identityProviders POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-14T00:47:21.8902663Z         
2026-01-14T00:47:21.8903113Z           with mongodbatlas_federated_settings_identity_provider.test,
2026-01-14T00:47:21.8903958Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_federated_settings_identity_provider" "test":
2026-01-14T00:47:21.8904910Z           12: 	resource "mongodbatlas_federated_settings_identity_provider" "test" {
2026-01-14T00:47:21.8905491Z         
2026-01-14T00:47:21.8906393Z --- FAIL: TestAccFederatedSettingsIdentityProvider_OIDCWorkload (1.20s)
```

- 2026-01-15 PASS 6 seconds
- 2026-01-16 PASS 6 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 6 seconds
- 2026-01-21 PASS 5 seconds
- 2026-01-22 PASS 6 seconds
- 2026-01-23 PASS 6 seconds
- 2026-01-24 PASS 7 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 7 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30 PASS 6 seconds
- 2026-01-31 PASS 7 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 8 seconds
- 2026-02-03 PASS 7 seconds
- 2026-02-04 PASS 7 seconds
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 7 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 6 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
