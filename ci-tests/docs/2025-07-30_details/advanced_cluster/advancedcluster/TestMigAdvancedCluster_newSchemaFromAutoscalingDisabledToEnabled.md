# advanced_cluster/advancedcluster/TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-29 00:33](#error-2025-07-29t0033240000) |  | dev | provider_download | 23.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 26 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 19 minutes
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 23 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 21 minutes
- 2025-07-06 PASS 20 minutes
- 2025-07-07 PASS 20 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10 PASS 17 minutes
- 2025-07-11 PASS 36 minutes
- 2025-07-12 PASS 22 minutes
- 2025-07-13 PASS 31 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 23 minutes
- 2025-07-16 PASS 21 minutes
- 2025-07-17 PASS 22 minutes
- 2025-07-18 PASS 19 minutes
- 2025-07-19 PASS 21 minutes
- 2025-07-20 PASS 28 minutes
- 2025-07-21 PASS 19 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 23 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-07-24 PASS 24 minutes
- 2025-07-25 PASS 21 minutes
- 2025-07-26 PASS 25 minutes
- 2025-07-27 PASS 25 minutes
- 2025-07-28 PASS 39 minutes
- 2025-07-29

### Error 2025-07-29T00:33:24+00:00
```
2025-07-29T00:33:24.1855248Z === RUN   TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-07-29T00:56:07.7788644Z === CONT  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-07-29T00:56:17.7799828Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-07-29T00:56:17.7802295Z     pre_check.go:40: Time before creating cluster: 2025-07-29T00:56:17.779626109Z, ProjectID: 688816d229c5e61354b15291, Cluster name: test-acc-tf-c-5951349548637418024
2025-07-29T00:56:31.2265635Z === NAME  TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled
2025-07-29T00:56:31.2266644Z     resource_advanced_cluster_migration_test.go:236: TestStep 1/2 running init: exit status 1
2025-07-29T00:56:31.2267279Z         
2025-07-29T00:56:31.2267579Z         Error: Failed to install provider
2025-07-29T00:56:31.2267850Z         
2025-07-29T00:56:31.2268323Z         Error while installing mongodb/mongodbatlas v1.22.0: could not query provider
2025-07-29T00:56:31.2268989Z         registry for registry.terraform.io/mongodb/mongodbatlas: failed to retrieve
2025-07-29T00:56:31.2269644Z         authentication checksums for provider: the request failed after 2 attempts,
2025-07-29T00:56:31.2270090Z         please try again later: Get
2025-07-29T00:56:31.2270966Z         "https://github.com/mongodb/terraform-provider-mongodbatlas/releases/download/v1.22.0/terraform-provider-mongodbatlas_1.22.0_SHA256SUMS":
2025-07-29T00:56:31.2271654Z         context deadline exceeded
2025-07-29T00:56:31.2500261Z --- FAIL: TestMigAdvancedCluster_newSchemaFromAutoscalingDisabledToEnabled (23.47s)
```

- 2025-07-30 PASS 24 minutes