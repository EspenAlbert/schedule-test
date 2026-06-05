# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 12 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09 PASS 15 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 11 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 14 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19 PASS 11 seconds
- 2026-05-20 PASS 11 seconds
- 2026-05-21 PASS 12 seconds
- 2026-05-22 PASS 10 seconds
- 2026-05-23 PASS 15 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26 PASS 12 seconds
- 2026-05-27 PASS 11 seconds
- 2026-05-28

### Error 2026-05-28T01:02:45+00:00
```
2026-05-28T01:02:45.2939468Z === RUN   TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-05-28T01:02:49.4530408Z === CONT  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-05-28T01:02:50.2052195Z   diagnostic_detail=
2026-05-28T01:02:50.2056775Z    diagnostic_severity=ERROR tf_req_id=3af33209-d47b-72c3-374c-80b6ff2c4967 tf_rpc=ValidateResourceConfig diagnostic_summary="Missing Configuration for Required Attribute" diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-05-28T01:02:50.9990395Z   
2026-05-28T01:02:51.1287289Z === NAME  TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk
2026-05-28T01:02:51.1288475Z     resource_test.go:740: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-05-28T01:02:51.1289033Z         
2026-05-28T01:02:51.1289507Z         Error: error creating project: test-acc-tf-p-1724476221906528659
2026-05-28T01:02:51.1290008Z         
2026-05-28T01:02:51.1290432Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:02:51.1291172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:02:51.1291864Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:02:51.1292231Z         
2026-05-28T01:02:51.1292747Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.1293453Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.1294142Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.1295099Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.1295560Z         BadRequestDetail: 
2026-05-28T01:02:51.1405476Z    test_terraform_path=/home/runner/work/_temp/a9a9d293-9f2b-4cfa-a9df-55ac1c37838e/terraform test_working_directory=/tmp/plugintest3858582775
2026-05-28T01:02:51.1918258Z --- FAIL: TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchemaInconsistentDisk (1.74s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30 PASS 11 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02 PASS 11 seconds
- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 11 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
