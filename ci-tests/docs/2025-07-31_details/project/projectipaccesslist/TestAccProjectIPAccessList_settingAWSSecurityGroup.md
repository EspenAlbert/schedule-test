# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 01:04](#error-2025-07-14t0104170000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/68744fd8d81a2d4bb4ea4718/containers | dev | 1.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-11 PASS 18 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T01:04:17+00:00
```
2025-07-14T01:04:17.1245730Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-07-14T01:04:17.1248745Z === CONT  TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-07-14T01:04:17.1266427Z === NAME  TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-07-14T01:04:17.1267267Z     resource_project_ip_access_list_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:04:17.1267706Z         
2025-07-14T01:04:17.1269569Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fd8d81a2d4bb4ea4718/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 68744fd8d81a2d4bb4ea4718. Reason: Conflict. Params: [68744fd8d81a2d4bb4ea4718], BadRequestDetail: 
2025-07-14T01:04:17.1270834Z         
2025-07-14T01:04:17.1271169Z           with mongodbatlas_network_container.test,
2025-07-14T01:04:17.1271824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-07-14T01:04:17.1272422Z           12: 		resource "mongodbatlas_network_container" "test" {
2025-07-14T01:04:17.1272733Z         
2025-07-14T01:04:17.1273042Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (1.10s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 7 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 3 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 3 minutes
- 2025-07-31 PASS 3 minutes