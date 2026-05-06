# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054520000) | NO_CAPACITY /api/atlas/v2/groups/69e032a91ec945fedc7289e4/containers | dev | 0.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14 PASS 3 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:54:52+00:00
```
2026-04-16T00:54:52.8053612Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-04-16T00:54:52.8056639Z === CONT  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-04-16T00:54:52.8069791Z === NAME  TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-04-16T00:54:52.8070422Z     resource_project_ip_access_list_test.go:98: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:52.8070877Z         
2026-04-16T00:54:52.8072865Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032a91ec945fedc7289e4/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e032a91ec945fedc7289e4. Reason: Conflict. Params: [AWS 69e032a91ec945fedc7289e4], BadRequestDetail: 
2026-04-16T00:54:52.8074114Z         
2026-04-16T00:54:52.8074457Z           with mongodbatlas_network_container.test,
2026-04-16T00:54:52.8075149Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:54:52.8075804Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-16T00:54:52.8076138Z         
2026-04-16T00:54:52.8076466Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.78s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 3 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 3 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30 PASS 3 minutes
- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04 PASS 3 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 4 minutes
