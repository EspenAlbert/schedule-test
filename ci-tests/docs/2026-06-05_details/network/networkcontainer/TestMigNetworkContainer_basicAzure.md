# network/networkcontainer/TestMigNetworkContainer_basicAzure Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-06-05 01:16](#error-2026-06-05t0116170000) | NO_CAPACITY /api/atlas/v2/groups/6a2220de42e1e504cd7ad5a1/containers | dev | 2.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 2 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 2 minutes
- 2026-05-14: MISSING
- 2026-05-15 PASS 2 minutes
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 2 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS 2 minutes
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS 2 minutes
- 2026-05-28: MISSING
- 2026-05-29 PASS 2 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 2 minutes
- 2026-06-04: MISSING
- 2026-06-05

### Error 2026-06-05T01:16:17+00:00
```
2026-06-05T01:16:17.7035643Z === RUN   TestMigNetworkContainer_basicAzure
2026-06-05T01:16:17.7046003Z    test_name=TestMigNetworkContainer_basicAzure
2026-06-05T01:16:17.7046839Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-06-05T01:16:17.7047376Z         
2026-06-05T01:16:17.7049393Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220de42e1e504cd7ad5a1/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a2220de42e1e504cd7ad5a1. Reason: Conflict. Params: [AZURE 6a2220de42e1e504cd7ad5a1], BadRequestDetail: 
2026-06-05T01:16:17.7050813Z         
2026-06-05T01:16:17.7051229Z           with mongodbatlas_network_container.test,
2026-06-05T01:16:17.7051990Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-06-05T01:16:17.7052711Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-06-05T01:16:17.7053093Z         
2026-06-05T01:16:17.7053419Z --- FAIL: TestMigNetworkContainer_basicAzure (2.15s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
