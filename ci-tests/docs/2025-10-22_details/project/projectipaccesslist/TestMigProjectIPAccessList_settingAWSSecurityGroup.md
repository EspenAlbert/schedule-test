# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 01:35](#error-2025-10-04t0135410000) |  | dev | timeout | 3723.07s
[2025-10-07 01:55](#error-2025-10-07t0155000000) |  | dev | timeout | 3723.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 3 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 3 minutes
  - PASS 54 minutes
  - PASS 2 minutes
  - PASS 54 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02 PASS 54 minutes
- 2025-10-03 PASS 9 minutes
- 2025-10-04

### Error 2025-10-04T01:35:41+00:00
```
2025-10-04T01:35:41.7326194Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-10-04T01:35:41.7337197Z    test_name=TestMigProjectIPAccessList_settingAWSSecurityGroup test_terraform_path=/home/runner/work/_temp/407ef6f2-ec56-47e7-85b6-a675c2fdaf86/terraform test_working_directory=/tmp/plugintest1416992278
2025-10-04T01:35:41.7339433Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2025-10-04T01:35:41.7340206Z         
2025-10-04T01:35:41.7341889Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:35:41.7344265Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:35:41.7345243Z         
2025-10-04T01:35:41.7345796Z           with mongodbatlas_network_peering.test,
2025-10-04T01:35:41.7346891Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_network_peering" "test":
2025-10-04T01:35:41.7347880Z           21: 		resource "mongodbatlas_network_peering" "test" {
2025-10-04T01:35:41.7348394Z         
2025-10-04T01:35:41.7348946Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (3723.66s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:55:00+00:00
```
2025-10-07T01:55:00.0805508Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-10-07T01:55:00.0818812Z   
2025-10-07T01:55:00.0819873Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2025-10-07T01:55:00.0820945Z         
2025-10-07T01:55:00.0822965Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:55:00.0825446Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:55:00.0826513Z         
2025-10-07T01:55:00.0827105Z           with mongodbatlas_network_peering.test,
2025-10-07T01:55:00.0828290Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_network_peering" "test":
2025-10-07T01:55:00.0829366Z           21: 		resource "mongodbatlas_network_peering" "test" {
2025-10-07T01:55:00.0829916Z         
2025-10-07T01:55:00.0830486Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (3723.72s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS 4 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 3 minutes
- 2025-10-20 PASS 3 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 3 minutes
  - PASS 3 minutes