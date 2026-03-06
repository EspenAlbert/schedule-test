# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1972.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS an hour
- 2026-02-06 PASS an hour
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS an hour
- 2026-02-10 PASS an hour
- 2026-02-11 PASS an hour
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16 PASS an hour
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS an hour
- 2026-02-20 PASS an hour
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0963290Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-24T00:40:00.5497690Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-24T01:09:48.5646081Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-02-24T01:09:48.5647305Z     resource_test.go:652: Step 2/4 error: Error running apply: exit status 1
2026-02-24T01:09:48.5647845Z         
2026-02-24T01:09:48.5648117Z         Error: Error in update
2026-02-24T01:09:48.5648377Z         
2026-02-24T01:09:48.5648714Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:09:48.5649410Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:09:48.5650299Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:09:48.5650625Z         
2026-02-24T01:09:48.5651065Z         cluster name: test-acc-tf-c-7317158059572806207, API error details: (503
2026-02-24T01:09:48.5651731Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:11:23.4229004Z    test_working_directory=/tmp/plugintest576690080
2026-02-24T01:12:52.6332562Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (1972.09s)
```

- 2026-02-25 PASS an hour
- 2026-02-26 PASS an hour
- 2026-02-27 PASS an hour
- 2026-02-28 PASS an hour
- 2026-03-01: MISSING
- 2026-03-02
  - PASS an hour
  - PASS an hour
- 2026-03-03 PASS an hour
- 2026-03-04 PASS an hour
- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 46 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 53 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 58 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 49 minutes
  - PASS 47 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 51 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 56 minutes
- 2026-03-02 PASS 48 minutes
- 2026-03-03 PASS 50 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
