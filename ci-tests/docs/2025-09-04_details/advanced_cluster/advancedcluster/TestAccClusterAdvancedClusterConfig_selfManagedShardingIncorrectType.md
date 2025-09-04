# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-31 00:30](#error-2025-08-31t0030050000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b3978b7e07f9709daecebc/clusters | qa | 50.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS a minute
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12
  - PASS 55 seconds
  - PASS a minute
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS a minute
- 2025-08-15: MISSING
- 2025-08-16 PASS 55 seconds
- 2025-08-17 PASS 55 seconds
- 2025-08-18 PASS 40 seconds
- 2025-08-19 PASS 55 seconds
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS 20 seconds
- 2025-08-22: MISSING
- 2025-08-23 PASS a minute
- 2025-08-24 PASS 55 seconds
- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS 45 seconds
- 2025-08-28 PASS 20 seconds
- 2025-08-29: MISSING
- 2025-08-30 PASS a minute
- 2025-08-31

### Error 2025-08-31T00:30:05+00:00
```
2025-08-31T00:30:05.4127306Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-08-31T00:31:03.8372774Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-08-31T00:31:53.8222247Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-08-31T00:31:53.8225653Z     pre_check.go:40: Time before creating cluster: 2025-08-31T00:31:53.821893052Z, ProjectID: 68b3978b7e07f9709daecebc, Cluster name: test-acc-tf-c-7956846182505113765
2025-08-31T00:31:54.5691881Z    test_terraform_path=/home/runner/work/_temp/f1f96b2a-7f11-4a21-86ac-4c24e40b4ba1/terraform test_working_directory=/tmp/plugintest4158214693 test_step_number=1 test_name=TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType
2025-08-31T00:31:54.5693543Z     resource_advanced_cluster_test.go:770: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-08-31T00:31:54.5694105Z         
2025-08-31T00:31:54.5696582Z         Error: error creating advanced cluster: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b3978b7e07f9709daecebc/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-31T00:31:54.5698358Z         
2025-08-31T00:31:54.5698675Z           with mongodbatlas_advanced_cluster.test,
2025-08-31T00:31:54.5699323Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-31T00:31:54.5700225Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-08-31T00:31:54.5700539Z         
2025-08-31T00:31:54.6123054Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedShardingIncorrectType (50.78s)
```

- 2025-09-01
  - PASS 5 seconds
  - PASS 10 seconds
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS 6 seconds
  - PASS a minute
  - PASS 40 seconds
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS 50 seconds