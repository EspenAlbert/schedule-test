# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 7)
Success rate: 81.58%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:41](#error-2026-09-10t0041070000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa1fcf55b8d9510e8920cad/clusters/test-acc-tf-c-6779555425410180291 | dev |  | 1360.10s
[2026-09-11 06:41](#error-2026-09-11t0641230000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6aa3a2ef821e0ea7a45ebb56/clusters/test-acc-tf-c-5418400816829747513 | dev |  | 1437.01s
[2026-09-16 00:41](#error-2026-09-16t0041480000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6aa9e625013d831ec44c170c/clusters/test-acc-tf-c-4927075913106966355 | dev |  | 1396.08s
[2026-09-17 00:42](#error-2026-09-17t0042070000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/clusters/{clusterName} | dev | unknown | 1299.08s
[2026-09-23 00:40](#error-2026-09-23t0040290000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab32056d27ba93df6439aea/clusters/test-acc-tf-c-9036255290517629239 | dev |  | 1005.07s
[2026-09-23 08:26](#error-2026-09-23t0826120000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6ab38d7faa941871fb3b6c3e/clusters/test-acc-tf-c-6482216040057961383 | dev |  | 1052.03s
[2026-09-29 10:43](#error-2026-09-29t1043320000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6abb9aab17aa9ebbfc007a07/clusters/test-acc-tf-c-7774940934253292343 | dev |  | 1300.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 minutes
- 2026-09-03
  - PASS 29 minutes
  - PASS 24 minutes
- 2026-09-04 PASS 29 minutes
- 2026-09-05 PASS 28 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 25 minutes
- 2026-09-08 PASS 24 minutes
- 2026-09-09 PASS 27 minutes
- 2026-09-10

### Error 2026-09-10T00:41:07+00:00
```
2026-09-10T00:41:07.5055820Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T00:42:25.3018841Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T01:02:33.3965494Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-10T01:02:33.3966202Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-10T01:02:33.3966627Z         
2026-09-10T01:02:33.3966915Z         Error: Error in update
2026-09-10T01:02:33.3967192Z         
2026-09-10T01:02:33.3967555Z           with mongodbatlas_advanced_cluster.test,
2026-09-10T01:02:33.3968258Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-10T01:02:33.3968925Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-10T01:02:33.3969270Z         
2026-09-10T01:02:33.3969730Z         cluster name: test-acc-tf-c-6779555425410180291, API error details:
2026-09-10T01:02:33.3970658Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fcf55b8d9510e8920cad/clusters/test-acc-tf-c-6779555425410180291
2026-09-10T01:02:33.3971501Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-10T01:02:33.3972356Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T01:02:33.3973055Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-10T01:02:33.3973720Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-10T01:02:33.3974329Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-10T01:05:05.9387372Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1360.95s)
```

- 2026-09-11
  - PASS 28 minutes
  - FAIL 23 minutes

### Error 2026-09-11T06:41:23+00:00
```
2026-09-11T06:41:23.9714435Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T06:42:51.1344792Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:04:44.4400561Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-11T07:04:44.4401655Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-11T07:04:44.4402299Z         
2026-09-11T07:04:44.4402749Z         Error: Error in update
2026-09-11T07:04:44.4403178Z         
2026-09-11T07:04:44.4404416Z           with mongodbatlas_advanced_cluster.test,
2026-09-11T07:04:44.4405706Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-11T07:04:44.4406896Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T07:04:44.4407529Z         
2026-09-11T07:04:44.4408346Z         cluster name: test-acc-tf-c-5418400816829747513, API error details:
2026-09-11T07:04:44.4409975Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa3a2ef821e0ea7a45ebb56/clusters/test-acc-tf-c-5418400816829747513
2026-09-11T07:04:44.4411484Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-11T07:04:44.4412738Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T07:04:44.4414252Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-11T07:04:44.4415484Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-11T07:04:44.4416608Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-11T07:06:47.1828231Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1437.09s)
```

- 2026-09-12 PASS 26 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 minutes
- 2026-09-15 PASS 26 minutes
- 2026-09-16

### Error 2026-09-16T00:41:48+00:00
```
2026-09-16T00:41:48.0119624Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-16T00:43:14.2507558Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-16T01:04:28.1986803Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-16T01:04:28.1987520Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-16T01:04:28.1997624Z         
2026-09-16T01:04:28.1997907Z         Error: Error in update
2026-09-16T01:04:28.1998102Z         
2026-09-16T01:04:28.1998336Z           with mongodbatlas_advanced_cluster.test,
2026-09-16T01:04:28.1998795Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-16T01:04:28.1999217Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-16T01:04:28.1999423Z         
2026-09-16T01:04:28.2000076Z         cluster name: test-acc-tf-c-4927075913106966355, API error details:
2026-09-16T01:04:28.2000742Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e625013d831ec44c170c/clusters/test-acc-tf-c-4927075913106966355
2026-09-16T01:04:28.2001250Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-09-16T01:04:28.2001664Z         Reason: Cannot upgrade MongoDB version due to in progress Feature
2026-09-16T01:04:28.2002348Z         Compatibility Version change. Please ensure all version change operations are
2026-09-16T01:04:28.2002822Z         complete before upgrading.. Reason: Bad Request. Params: [Cannot upgrade
2026-09-16T01:04:28.2003266Z         MongoDB version due to in progress Feature Compatibility Version change.
2026-09-16T01:04:28.2003736Z         Please ensure all version change operations are complete before upgrading.],
2026-09-16T01:04:28.2004043Z         BadRequestDetail: 
2026-09-16T01:06:30.5776389Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1396.83s)
```

- 2026-09-17

### Error 2026-09-17T00:42:07+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T00:42:07.695000+00:00-TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade',confidence=1.0,ts_when='15 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/clusters/{clusterName}
```
2026-09-17T00:42:07.6958986Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-17T00:43:41.3529483Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-17T01:03:18.7059472Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-17T01:03:18.7060047Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-17T01:03:18.7060423Z         
2026-09-17T01:03:18.7060864Z         Error: Error in update
2026-09-17T01:03:18.7061226Z         
2026-09-17T01:03:18.7061590Z           with mongodbatlas_advanced_cluster.test,
2026-09-17T01:03:18.7062237Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-17T01:03:18.7062761Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-17T01:03:18.7063103Z         
2026-09-17T01:03:18.7063595Z         cluster name: test-acc-tf-c-5324856624058778015, API error details:
2026-09-17T01:03:18.7064435Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab37c0b7babdea2c8cac0f/clusters/test-acc-tf-c-5324856624058778015
2026-09-17T01:03:18.7065117Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-09-17T01:03:18.7065621Z         Reason: Cannot upgrade MongoDB version due to in progress Feature
2026-09-17T01:03:18.7066229Z         Compatibility Version change. Please ensure all version change operations are
2026-09-17T01:03:18.7066945Z         complete before upgrading.. Reason: Bad Request. Params: [Cannot upgrade
2026-09-17T01:03:18.7067507Z         MongoDB version due to in progress Feature Compatibility Version change.
2026-09-17T01:03:18.7068315Z         Please ensure all version change operations are complete before upgrading.],
2026-09-17T01:03:18.7068771Z         BadRequestDetail: 
2026-09-17T01:05:21.1800212Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1299.83s)
```

- 2026-09-18 PASS 27 minutes
- 2026-09-19 PASS 29 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 28 minutes
- 2026-09-22
  - PASS 26 minutes
  - PASS 28 minutes
- 2026-09-23
  - FAIL 16 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.3926280Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T00:41:55.3731148Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T00:57:08.1967129Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T00:57:08.1967718Z     resource_test.go:884: Step 5/8 error: Error running apply: exit status 1
2026-09-23T00:57:08.1968066Z         
2026-09-23T00:57:08.1968271Z         Error: Error in update
2026-09-23T00:57:08.1968508Z         
2026-09-23T00:57:08.1968729Z           with mongodbatlas_advanced_cluster.test,
2026-09-23T00:57:08.1969113Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-23T00:57:08.1969568Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-23T00:57:08.1969793Z         
2026-09-23T00:57:08.1970170Z         cluster name: test-acc-tf-c-9036255290517629239, API error details:
2026-09-23T00:57:08.1970672Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab32056d27ba93df6439aea/clusters/test-acc-tf-c-9036255290517629239
2026-09-23T00:57:08.1971261Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-23T00:57:08.1971836Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T00:57:08.1972213Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-23T00:57:08.1972589Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T00:57:08.1972930Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-23T00:58:40.8184190Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1005.70s)
```

  - FAIL 17 minutes

### Error 2026-09-23T08:26:12+00:00
```
2026-09-23T08:26:12.6766232Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:27:38.0887177Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:43:38.2839339Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-23T08:43:38.2841263Z     resource_test.go:884: Step 5/8 error: Error running apply: exit status 1
2026-09-23T08:43:38.2842062Z         
2026-09-23T08:43:38.2842585Z         Error: Error in update
2026-09-23T08:43:38.2843093Z         
2026-09-23T08:43:38.2843782Z           with mongodbatlas_advanced_cluster.test,
2026-09-23T08:43:38.2845104Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-23T08:43:38.2846359Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-23T08:43:38.2846983Z         
2026-09-23T08:43:38.2847816Z         cluster name: test-acc-tf-c-6482216040057961383, API error details:
2026-09-23T08:43:38.2849603Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab38d7faa941871fb3b6c3e/clusters/test-acc-tf-c-6482216040057961383
2026-09-23T08:43:38.2851515Z         PATCH: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-09-23T08:43:38.2852919Z         attribute Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T08:43:38.2854226Z         Please wait a few minutes and try again. specified. Reason: Bad Request.
2026-09-23T08:43:38.2855501Z         Params: [Cannot validate cluster compatibility due to stale monitoring data.
2026-09-23T08:43:38.2856751Z         Please wait a few minutes and try again.], BadRequestDetail: 
2026-09-23T08:45:10.1986132Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1052.26s)
```

- 2026-09-24 PASS 26 minutes
- 2026-09-25 PASS 24 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 34 minutes
- 2026-09-29
  - PASS 24 minutes
  - FAIL 21 minutes

### Error 2026-09-29T10:43:32+00:00
```
2026-09-29T10:43:32.0211117Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-29T11:02:03.2921171Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-29T11:20:10.4226288Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-09-29T11:20:10.4227568Z     resource_test.go:884: Step 6/8 error: Error running apply: exit status 1
2026-09-29T11:20:10.4231031Z         
2026-09-29T11:20:10.4231793Z         Error: Error in update
2026-09-29T11:20:10.4232241Z         
2026-09-29T11:20:10.4232831Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T11:20:10.4234198Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T11:20:10.4235284Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T11:20:10.4235730Z         
2026-09-29T11:20:10.4236197Z         cluster name: test-acc-tf-c-7774940934253292343, API error details:
2026-09-29T11:20:10.4237133Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb9aab17aa9ebbfc007a07/clusters/test-acc-tf-c-7774940934253292343
2026-09-29T11:20:10.4237980Z         PATCH: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2026-09-29T11:20:10.4238971Z         Reason: Cannot upgrade MongoDB version due to in progress Feature
2026-09-29T11:20:10.4239681Z         Compatibility Version change. Please ensure all version change operations are
2026-09-29T11:20:10.4240412Z         complete before upgrading.. Reason: Bad Request. Params: [Cannot upgrade
2026-09-29T11:20:10.4241095Z         MongoDB version due to in progress Feature Compatibility Version change.
2026-09-29T11:20:10.4241776Z         Please ensure all version change operations are complete before upgrading.],
2026-09-29T11:20:10.4242261Z         BadRequestDetail: 
2026-09-29T11:23:43.7905642Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1300.50s)
```

  - PASS 23 minutes
- 2026-09-30 PASS 28 minutes
- 2026-10-01 PASS 23 minutes
- 2026-10-02 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 24 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 23 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 21 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 23 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 25 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 24 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
