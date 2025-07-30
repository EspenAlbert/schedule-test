# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 01:04](#error-2025-07-14t0104170000) |  | dev | 1531.05s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 2 minutes
- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T01:04:17+00:00
```
2025-07-14T01:04:17.1221883Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-07-14T01:04:17.1228774Z   
2025-07-14T01:04:17.1231130Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:04:17.1231866Z         
2025-07-14T01:04:17.1232763Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T01:04:17.1233480Z         
2025-07-14T01:04:17.1233999Z           with mongodbatlas_network_peering.test,
2025-07-14T01:04:17.1234734Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_network_peering" "test":
2025-07-14T01:04:17.1235319Z           21: 		resource "mongodbatlas_network_peering" "test" {
2025-07-14T01:04:17.1235632Z         
2025-07-14T01:04:17.1239181Z    test_terraform_path=/home/runner/work/_temp/1ce0b2d1-1a0e-4f1b-a9c9-39342acdf644/terraform test_working_directory=/tmp/plugintest2896250659 test_step_number=1 test_name=TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-07-14T01:04:17.1240659Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:04:17.1241422Z         
2025-07-14T01:04:17.1242707Z         Error: error deleting MongoDB Network Peering Container (68744fdd52cba864e5f1099b): couldn't find resource (21 retries)
2025-07-14T01:04:17.1243505Z         
2025-07-14T01:04:17.1243839Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (1531.50s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 2 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 2 minutes
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27 PASS 2 minutes
- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 2 minutes