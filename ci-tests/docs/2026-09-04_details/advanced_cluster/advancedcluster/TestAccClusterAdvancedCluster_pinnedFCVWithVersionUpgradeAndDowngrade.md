# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 00:33](#error-2026-08-14t0033440000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6a7e62c133ce881fa8882ec3/clusters/test-acc-tf-c-2641756423632386971 | dev | 1270.09s
[2026-08-27 01:47](#error-2026-08-27t0147350000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a8f978d9936ccbea2ec9d55/clusters/test-acc-tf-c-5536893903650821771 | dev | 1026.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 23 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08 PASS 24 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 23 minutes
- 2026-08-11 PASS 26 minutes
- 2026-08-12 PASS 24 minutes
- 2026-08-13 PASS 24 minutes
- 2026-08-14

### Error 2026-08-14T00:33:44+00:00
```
2026-08-14T00:33:44.5624898Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:35:08.6889172Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:53:44.9411578Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-14T00:53:44.9412790Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-08-14T00:53:44.9413505Z         
2026-08-14T00:53:44.9413984Z         Error: Error in update
2026-08-14T00:53:44.9414482Z         
2026-08-14T00:53:44.9415141Z           with mongodbatlas_advanced_cluster.test,
2026-08-14T00:53:44.9416959Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-14T00:53:44.9418184Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-14T00:53:44.9418774Z         
2026-08-14T00:53:44.9419562Z         cluster name: test-acc-tf-c-2641756423632386971, API error details:
2026-08-14T00:53:44.9421164Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7e62c133ce881fa8882ec3/clusters/test-acc-tf-c-2641756423632386971
2026-08-14T00:53:44.9422660Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-08-14T00:53:44.9423802Z         Reason: Cannot upgrade MongoDB version due to in progress Feature
2026-08-14T00:53:44.9425040Z         Compatibility Version change. Please ensure all version change operations are
2026-08-14T00:53:44.9426518Z         complete before upgrading.. Reason: Bad Request. Params: [Cannot upgrade
2026-08-14T00:53:44.9427766Z         MongoDB version due to in progress Feature Compatibility Version change.
2026-08-14T00:53:44.9429055Z         Please ensure all version change operations are complete before upgrading.],
2026-08-14T00:53:44.9429897Z         BadRequestDetail: 
2026-08-14T00:56:19.6107629Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1270.92s)
```

- 2026-08-15 PASS 22 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 23 minutes
- 2026-08-18 PASS 22 minutes
- 2026-08-19 PASS 24 minutes
- 2026-08-20 PASS 22 minutes
- 2026-08-21 PASS 24 minutes
- 2026-08-22 PASS 23 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 22 minutes
- 2026-08-25 PASS 24 minutes
- 2026-08-26 PASS 25 minutes
- 2026-08-27

### Error 2026-08-27T01:47:35+00:00
```
2026-08-27T01:47:35.1929173Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-27T01:48:56.4442606Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-27T02:04:00.3111131Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-08-27T02:04:00.3112664Z     resource_test.go:884: Step 5/8 error: Error running apply: exit status 1
2026-08-27T02:04:00.3113662Z         
2026-08-27T02:04:00.3114705Z         Error: Error in update
2026-08-27T02:04:00.3115193Z         
2026-08-27T02:04:00.3116086Z           with mongodbatlas_advanced_cluster.test,
2026-08-27T02:04:00.3117995Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-27T02:04:00.3119528Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-27T02:04:00.3120406Z         
2026-08-27T02:04:00.3121457Z         cluster name: test-acc-tf-c-5536893903650821771, API error details:
2026-08-27T02:04:00.3123425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a8f978d9936ccbea2ec9d55/clusters/test-acc-tf-c-5536893903650821771
2026-08-27T02:04:00.3126968Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-08-27T02:04:00.3129017Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-08-27T02:04:00.3130738Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-08-27T02:04:00.3132308Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-08-27T02:04:00.3134138Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-08-27T02:06:02.8192589Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1026.97s)
```

- 2026-08-28 PASS 25 minutes
- 2026-08-29 PASS 26 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 25 minutes
- 2026-09-01 PASS 24 minutes
- 2026-09-02 PASS 26 minutes
- 2026-09-03
  - PASS 29 minutes
  - PASS 24 minutes
- 2026-09-04 PASS 29 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 22 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 23 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 24 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 23 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 22 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 22 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
