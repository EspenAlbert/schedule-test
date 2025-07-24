# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 04:28](#error-2025-07-10t0428210000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 22,36,73 | dev | real_test_failure | 220.07s
[2025-07-23 12:32](#error-2025-07-23t1232270000) | CheckFailure for advanced_cluster.test at Step: 2 Checks: 23,38,74 | qa |  | 1077.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 5 minutes
- 2025-06-26
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-06-27 PASS 5 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 5 minutes
- 2025-07-01
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-07-02 PASS 5 minutes
- 2025-07-03 PASS 5 minutes
- 2025-07-04 PASS 5 minutes
- 2025-07-05 PASS 5 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 5 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10
  - FAIL 3 minutes

### Error 2025-07-10T04:28:21+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T04:28:21.976000+00:00-TestAccAdvancedCluster_sharedTier_flexUpgrade',confidence=1.0,ts_when='14 days ago')
CheckFailure for advanced_cluster.test at Step: 2 Checks: 22,36,73
```
2025-07-10T04:28:21.9767904Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-10T04:28:21.9769540Z     pre_check.go:40: Time before creating cluster: 2025-07-10T03:30:54.164278113Z, ProjectID: 686f096b964afc762c202a8e, Cluster name: test-acc-tf-c-3258063938174301848
2025-07-10T04:28:21.9779928Z   
2025-07-10T04:28:21.9782171Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 22/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T04:28:21.9784982Z         Check 36/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-10T04:28:21.9787040Z         Check 73/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-10T04:28:21.9788036Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (220.66s)
```

  - PASS 4 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 5 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 7 minutes
- 2025-07-16 PASS 6 minutes
- 2025-07-17 PASS 5 minutes
- 2025-07-18 PASS 4 minutes
- 2025-07-19 PASS 5 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 4 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - PASS 4 minutes
  - FAIL 17 minutes

### Error 2025-07-23T12:32:27+00:00
```
2025-07-23T12:32:27.0230617Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-07-23T12:32:27.0231568Z     pre_check.go:40: Time before creating cluster: 2025-07-23T11:16:56.525270262Z, ProjectID: 68809a25dafa37582cece141, Cluster name: test-acc-tf-c-4873250138891037632
2025-07-23T12:32:27.0237247Z    test_step_number=2
2025-07-23T12:32:27.0238255Z     resource_advanced_cluster_test.go:160: Step 2/2 error: Check failed: Check 23/74 error: data.mongodbatlas_advanced_cluster.test: Attribute 'replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T12:32:27.0240134Z         Check 38/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.provider_name' expected "FLEX", got "TENANT"
2025-07-23T12:32:27.0241328Z         Check 74/74 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-07-23T12:32:27.0241908Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (1077.33s)
```

  - PASS 4 minutes
  - PASS 5 minutes
- 2025-07-24 PASS 4 minutes