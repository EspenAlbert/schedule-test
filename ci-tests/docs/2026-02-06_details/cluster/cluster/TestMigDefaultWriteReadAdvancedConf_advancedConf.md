# cluster/cluster/TestMigDefaultWriteReadAdvancedConf_advancedConf Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10837.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 18 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 17 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 19 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 14 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 14 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 18 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 17 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 22 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4151770Z === RUN   TestMigDefaultWriteReadAdvancedConf_advancedConf
2026-02-02T00:38:37.8816764Z === CONT  TestMigDefaultWriteReadAdvancedConf_advancedConf
2026-02-02T00:39:12.8939069Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2026-02-02T00:39:12.8940296Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:12.893610251Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-2415761375193950527
2026-02-02T03:39:15.4401262Z === NAME  TestMigDefaultWriteReadAdvancedConf_advancedConf
2026-02-02T03:39:15.4402236Z     resource_cluster_migration_test.go:20: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:15.4402866Z         
2026-02-02T03:39:15.4404044Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:15.4404855Z         
2026-02-02T03:39:15.4405285Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:15.4406112Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:15.4406985Z           14: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:15.4407514Z         
2026-02-02T03:39:15.6112983Z --- FAIL: TestMigDefaultWriteReadAdvancedConf_advancedConf (10837.73s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 29 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 17 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 15 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 14 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 13 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 16 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
