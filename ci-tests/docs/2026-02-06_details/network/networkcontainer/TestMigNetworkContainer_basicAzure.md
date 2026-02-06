# network/networkcontainer/TestMigNetworkContainer_basicAzure Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:43](#error-2026-01-14t0043160000) | NO_CAPACITY /api/atlas/v2/groups/6966e4275b4465e94c2eb63b/containers | dev | flaky_500 | 1.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 2 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 2 minutes
- 2026-01-13: MISSING
- 2026-01-14

### Error 2026-01-14T00:43:16+00:00
```
2026-01-14T00:43:16.3134139Z === RUN   TestMigNetworkContainer_basicAzure
2026-01-14T00:43:16.3147951Z    test_name=TestMigNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/245cfe33-c995-4c6d-9bf4-cbc2c633f57f/terraform test_working_directory=/tmp/plugintest990405655
2026-01-14T00:43:16.3150027Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-01-14T00:43:16.3150921Z         
2026-01-14T00:43:16.3154808Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e4275b4465e94c2eb63b/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6966e4275b4465e94c2eb63b. Reason: Conflict. Params: [AZURE 6966e4275b4465e94c2eb63b], BadRequestDetail: 
2026-01-14T00:43:16.3157300Z         
2026-01-14T00:43:16.3157953Z           with mongodbatlas_network_container.test,
2026-01-14T00:43:16.3159244Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-01-14T00:43:16.3160454Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-01-14T00:43:16.3161080Z         
2026-01-14T00:43:16.3161570Z --- FAIL: TestMigNetworkContainer_basicAzure (1.63s)
```

- 2026-01-15: MISSING
- 2026-01-16 PASS 2 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 2 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 2 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 2 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 2 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 minutes
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
