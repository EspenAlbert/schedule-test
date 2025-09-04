# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 9)
Success rate: 76.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-08 00:30](#error-2025-08-08t0030510000) | API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name} | dev | flaky_check | 13.06s
[2025-08-11 00:32](#error-2025-08-11t0032170000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68993a1109b64000724caede/flexClusters/test-acc-tf-3765753758409831949 | dev |  | 13.09s
[2025-08-26 00:27](#error-2025-08-26t0027410000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68acff7e52781c2812d00eb3/flexClusters/test-acc-tf-1871979398320503595 | dev |  | 15.01s
[2025-08-29 00:27](#error-2025-08-29t0027410000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b0f3fdc342212f74ff8e96/flexClusters/test-acc-tf-4063065001975866850 | dev | flaky_500 | 14.10s
[2025-09-01 00:30](#error-2025-09-01t0030220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2025-09-01 05:58](#error-2025-09-01t0558100000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b535f37af6b0372e97ad7c/flexClusters/test-acc-tf-8298639980457585211 | dev |  | 13.06s
[2025-09-01 16:10](#error-2025-09-01t1610480000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b5c5882fc5f0455fbb2c88/flexClusters/test-acc-tf-6347693147542942912 | dev | flaky_500 | 13.08s
[2025-09-02 00:27](#error-2025-09-02t0027240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b639ecb3a1cd7a16617f20/flexClusters/test-acc-tf-2140697997220426716 | dev |  | 13.04s
[2025-09-03 00:25](#error-2025-09-03t0025570000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b78b1573bec4026cf73936/flexClusters/test-acc-tf-5056861727582132851 | dev | flaky_500 | 13.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 55 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08

### Error 2025-08-08T00:30:51+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-08-08T00:30:51.894000+00:00-TestAccFlexClusterRS_basic',confidence=1.0,ts_when='27 days ago')
API Error ATLAS_GENERAL_ERROR /api/atlas/v2/groups/{groupId}/flexClusters/{name}
```
2025-08-08T00:30:51.8941404Z === RUN   TestAccFlexClusterRS_basic
2025-08-08T00:30:51.8944953Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3773034305365452788
2025-08-08T00:31:05.2784560Z    test_working_directory=/tmp/plugintest777872283
2025-08-08T00:31:05.2788380Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-08T00:31:05.2790441Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-08T00:31:05.2792093Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-08T00:31:05.5321381Z   
2025-08-08T00:31:05.5322112Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-08T00:31:05.5322749Z         
2025-08-08T00:31:05.5323543Z         Error: error deleting a flex cluster (6895453c13642126f901bf0e): test-acc-tf-814663123187778548
2025-08-08T00:31:05.5324300Z         
2025-08-08T00:31:05.5325027Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6895453c13642126f901bf0e/flexClusters/test-acc-tf-814663123187778548
2025-08-08T00:31:05.5325805Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-08-08T00:31:05.5326392Z         Reason: Cannot terminate cluster test-acc-tf-814663123187778548 in group
2025-08-08T00:31:05.5327013Z         6895453c13642126f901bf0e because termination protection is enabled. Disable
2025-08-08T00:31:05.5327649Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-08-08T00:31:05.5328220Z         terminate cluster test-acc-tf-814663123187778548 in group
2025-08-08T00:31:05.5328807Z         6895453c13642126f901bf0e because termination protection is enabled. Disable
2025-08-08T00:31:05.5329600Z         termination protection and try again.], BadRequestDetail: 
2025-08-08T00:31:05.5329977Z --- FAIL: TestAccFlexClusterRS_basic (13.64s)
```

- 2025-08-09 PASS 50 seconds
- 2025-08-10 PASS 48 seconds
- 2025-08-11

### Error 2025-08-11T00:32:17+00:00
```
2025-08-11T00:32:17.2402939Z === RUN   TestAccFlexClusterRS_basic
2025-08-11T00:32:17.2405043Z     resource_test.go:19: Creating execution project: test-acc-tf-p-8144443203785854342
2025-08-11T00:32:30.8781223Z    test_terraform_path=/home/runner/work/_temp/14f6aa0b-8f34-4177-8aa3-785148882635/terraform
2025-08-11T00:32:30.8783355Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-11T00:32:30.8785372Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-11T00:32:30.8787492Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-11T00:32:31.1210031Z   
2025-08-11T00:32:31.1210911Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T00:32:31.1211679Z         
2025-08-11T00:32:31.1212659Z         Error: error deleting a flex cluster (68993a1109b64000724caede): test-acc-tf-3765753758409831949
2025-08-11T00:32:31.1213430Z         
2025-08-11T00:32:31.1214753Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68993a1109b64000724caede/flexClusters/test-acc-tf-3765753758409831949
2025-08-11T00:32:31.1216437Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-08-11T00:32:31.1217566Z         Reason: Cannot terminate cluster test-acc-tf-3765753758409831949 in group
2025-08-11T00:32:31.1218701Z         68993a1109b64000724caede because termination protection is enabled. Disable
2025-08-11T00:32:31.1219864Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-08-11T00:32:31.1220846Z         terminate cluster test-acc-tf-3765753758409831949 in group
2025-08-11T00:32:31.1221874Z         68993a1109b64000724caede because termination protection is enabled. Disable
2025-08-11T00:32:31.1223145Z         termination protection and try again.], BadRequestDetail: 
2025-08-11T00:32:31.1223778Z --- FAIL: TestAccFlexClusterRS_basic (13.88s)
```

- 2025-08-12 PASS 50 seconds
- 2025-08-13 PASS 53 seconds
- 2025-08-14 PASS a minute
- 2025-08-15 PASS 49 seconds
- 2025-08-16 PASS a minute
- 2025-08-17 PASS 57 seconds
- 2025-08-18 PASS 59 seconds
- 2025-08-19 PASS 53 seconds
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS 49 seconds
- 2025-08-23 PASS a minute
- 2025-08-24 PASS 50 seconds
- 2025-08-25 PASS 51 seconds
- 2025-08-26

### Error 2025-08-26T00:27:41+00:00
```
2025-08-26T00:27:41.8330694Z === RUN   TestAccFlexClusterRS_basic
2025-08-26T00:27:41.8332177Z     resource_test.go:19: Creating execution project: test-acc-tf-p-7929834398183068649
2025-08-26T00:27:56.5990256Z   
2025-08-26T00:27:56.5992188Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-26T00:27:56.5993816Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-26T00:27:56.5995404Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-26T00:27:56.9568121Z   
2025-08-26T00:27:56.9569357Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-26T00:27:56.9570175Z         
2025-08-26T00:27:56.9571276Z         Error: error deleting a flex cluster (68acff7e52781c2812d00eb3): test-acc-tf-1871979398320503595
2025-08-26T00:27:56.9572146Z         
2025-08-26T00:27:56.9573568Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68acff7e52781c2812d00eb3/flexClusters/test-acc-tf-1871979398320503595
2025-08-26T00:27:56.9575031Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-08-26T00:27:56.9575734Z         Reason: Cannot terminate cluster test-acc-tf-1871979398320503595 in group
2025-08-26T00:27:56.9576380Z         68acff7e52781c2812d00eb3 because termination protection is enabled. Disable
2025-08-26T00:27:56.9577026Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-08-26T00:27:56.9577591Z         terminate cluster test-acc-tf-1871979398320503595 in group
2025-08-26T00:27:56.9578242Z         68acff7e52781c2812d00eb3 because termination protection is enabled. Disable
2025-08-26T00:27:56.9579384Z         termination protection and try again.], BadRequestDetail: 
2025-08-26T00:27:56.9579781Z --- FAIL: TestAccFlexClusterRS_basic (15.12s)
```

- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29

### Error 2025-08-29T00:27:41+00:00
```
2025-08-29T00:27:41.4325968Z === RUN   TestAccFlexClusterRS_basic
2025-08-29T00:27:41.4329858Z     resource_test.go:20: Creating execution project: test-acc-tf-p-6127579845945865964
2025-08-29T00:27:56.0254976Z    test_working_directory=/tmp/plugintest2374829420
2025-08-29T00:27:56.0259014Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-29T00:27:56.0260980Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-08-29T00:27:56.0262747Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-08-29T00:27:56.3855453Z   
2025-08-29T00:27:56.3856429Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-29T00:27:56.3857270Z         
2025-08-29T00:27:56.3858275Z         Error: error deleting a flex cluster (68b0f3fdc342212f74ff8e96): test-acc-tf-4063065001975866850
2025-08-29T00:27:56.3859092Z         
2025-08-29T00:27:56.3860383Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3fdc342212f74ff8e96/flexClusters/test-acc-tf-4063065001975866850
2025-08-29T00:27:56.3862198Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-08-29T00:27:56.3863349Z         Reason: Cannot terminate cluster test-acc-tf-4063065001975866850 in group
2025-08-29T00:27:56.3864556Z         68b0f3fdc342212f74ff8e96 because termination protection is enabled. Disable
2025-08-29T00:27:56.3865299Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-08-29T00:27:56.3865866Z         terminate cluster test-acc-tf-4063065001975866850 in group
2025-08-29T00:27:56.3866447Z         68b0f3fdc342212f74ff8e96 because termination protection is enabled. Disable
2025-08-29T00:27:56.3867299Z         termination protection and try again.], BadRequestDetail: 
2025-08-29T00:27:56.3867702Z --- FAIL: TestAccFlexClusterRS_basic (14.95s)
```

- 2025-08-30 PASS a minute
- 2025-08-31 PASS 48 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:22+00:00
```
2025-09-01T00:30:22.7284131Z === RUN   TestAccFlexClusterRS_basic
2025-09-01T00:30:22.7285465Z     resource_test.go:19: Creating execution project: test-acc-tf-p-7879527428805581666
2025-09-01T00:30:23.0102610Z     resource_test.go:19: 
2025-09-01T00:30:23.0104393Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:23.0108264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:23.0112243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:32
2025-09-01T00:30:23.0115383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:19
2025-09-01T00:30:23.0116178Z         	Error:      	Received unexpected error:
2025-09-01T00:30:23.0119261Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:23.0120554Z         	Test:       	TestAccFlexClusterRS_basic
2025-09-01T00:30:23.0122747Z         	Messages:   	Project creation failed: test-acc-tf-p-7879527428805581666, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:23.0124098Z --- FAIL: TestAccFlexClusterRS_basic (0.28s)
```

  - FAIL 13 seconds

### Error 2025-09-01T05:58:10+00:00
```
2025-09-01T05:58:10.9171885Z === RUN   TestAccFlexClusterRS_basic
2025-09-01T05:58:10.9175281Z     resource_test.go:19: Creating execution project: test-acc-tf-p-5273357483158023245
2025-09-01T05:58:24.2536311Z   
2025-09-01T05:58:24.2538158Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T05:58:24.2539929Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T05:58:24.2541562Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T05:58:24.4786069Z    test_working_directory=/tmp/plugintest522130781 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/06844f11-4e39-418e-8439-afe09973923e/terraform
2025-09-01T05:58:24.4787930Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T05:58:24.4788638Z         
2025-09-01T05:58:24.4789614Z         Error: error deleting a flex cluster (68b535f37af6b0372e97ad7c): test-acc-tf-8298639980457585211
2025-09-01T05:58:24.4790332Z         
2025-09-01T05:58:24.4791515Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b535f37af6b0372e97ad7c/flexClusters/test-acc-tf-8298639980457585211
2025-09-01T05:58:24.4792778Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-01T05:58:24.4793786Z         Reason: Cannot terminate cluster test-acc-tf-8298639980457585211 in group
2025-09-01T05:58:24.4794833Z         68b535f37af6b0372e97ad7c because termination protection is enabled. Disable
2025-09-01T05:58:24.4795936Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-01T05:58:24.4804067Z         terminate cluster test-acc-tf-8298639980457585211 in group
2025-09-01T05:58:24.4805517Z         68b535f37af6b0372e97ad7c because termination protection is enabled. Disable
2025-09-01T05:58:24.4806891Z         termination protection and try again.], BadRequestDetail: 
2025-09-01T05:58:24.4807543Z --- FAIL: TestAccFlexClusterRS_basic (13.56s)
```

  - PASS 2 minutes
  - PASS 59 seconds
  - PASS 53 seconds
  - PASS a minute
  - PASS 51 seconds
  - FAIL 13 seconds

### Error 2025-09-01T16:10:48+00:00
```
2025-09-01T16:10:48.2686585Z === RUN   TestAccFlexClusterRS_basic
2025-09-01T16:10:48.2688113Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3021747773347681939
2025-09-01T16:11:01.7519181Z    test_terraform_path=/home/runner/work/_temp/44cd000f-5542-4f08-929b-6970bd4f15e8/terraform test_working_directory=/tmp/plugintest3162257105 test_step_number=1
2025-09-01T16:11:01.7521258Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T16:11:01.7522552Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-01T16:11:01.7523553Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-01T16:11:02.0500408Z   
2025-09-01T16:11:02.0501298Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T16:11:02.0502120Z         
2025-09-01T16:11:02.0503166Z         Error: error deleting a flex cluster (68b5c5882fc5f0455fbb2c88): test-acc-tf-6347693147542942912
2025-09-01T16:11:02.0503701Z         
2025-09-01T16:11:02.0504438Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c5882fc5f0455fbb2c88/flexClusters/test-acc-tf-6347693147542942912
2025-09-01T16:11:02.0505538Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-01T16:11:02.0506158Z         Reason: Cannot terminate cluster test-acc-tf-6347693147542942912 in group
2025-09-01T16:11:02.0506798Z         68b5c5882fc5f0455fbb2c88 because termination protection is enabled. Disable
2025-09-01T16:11:02.0507454Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-01T16:11:02.0508012Z         terminate cluster test-acc-tf-6347693147542942912 in group
2025-09-01T16:11:02.0508819Z         68b5c5882fc5f0455fbb2c88 because termination protection is enabled. Disable
2025-09-01T16:11:02.0509416Z         termination protection and try again.], BadRequestDetail: 
2025-09-01T16:11:02.0509800Z --- FAIL: TestAccFlexClusterRS_basic (13.78s)
```

- 2025-09-02

### Error 2025-09-02T00:27:24+00:00
```
2025-09-02T00:27:24.5631004Z === RUN   TestAccFlexClusterRS_basic
2025-09-02T00:27:24.5632638Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3343316317523440028
2025-09-02T00:27:37.6940101Z    test_step_number=1 test_working_directory=/tmp/plugintest450857127
2025-09-02T00:27:37.6941953Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-02T00:27:37.6943787Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-02T00:27:37.6945441Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-02T00:27:37.9485840Z   
2025-09-02T00:27:37.9486838Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-02T00:27:37.9487672Z         
2025-09-02T00:27:37.9488780Z         Error: error deleting a flex cluster (68b639ecb3a1cd7a16617f20): test-acc-tf-2140697997220426716
2025-09-02T00:27:37.9490047Z         
2025-09-02T00:27:37.9491101Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b639ecb3a1cd7a16617f20/flexClusters/test-acc-tf-2140697997220426716
2025-09-02T00:27:37.9491914Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-02T00:27:37.9492524Z         Reason: Cannot terminate cluster test-acc-tf-2140697997220426716 in group
2025-09-02T00:27:37.9493156Z         68b639ecb3a1cd7a16617f20 because termination protection is enabled. Disable
2025-09-02T00:27:37.9493808Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-02T00:27:37.9494377Z         terminate cluster test-acc-tf-2140697997220426716 in group
2025-09-02T00:27:37.9495215Z         68b639ecb3a1cd7a16617f20 because termination protection is enabled. Disable
2025-09-02T00:27:37.9495797Z         termination protection and try again.], BadRequestDetail: 
2025-09-02T00:27:37.9496165Z --- FAIL: TestAccFlexClusterRS_basic (13.38s)
```

- 2025-09-03

### Error 2025-09-03T00:25:57+00:00
```
2025-09-03T00:25:57.6500340Z === RUN   TestAccFlexClusterRS_basic
2025-09-03T00:25:57.6503379Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3233655268662420427
2025-09-03T00:26:10.8618171Z    test_working_directory=/tmp/plugintest3617820298 test_step_number=1
2025-09-03T00:26:10.8622249Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-03T00:26:10.8624077Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-03T00:26:10.8625765Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-03T00:26:11.1644710Z   
2025-09-03T00:26:11.1645262Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T00:26:11.1645684Z         
2025-09-03T00:26:11.1646235Z         Error: error deleting a flex cluster (68b78b1573bec4026cf73936): test-acc-tf-5056861727582132851
2025-09-03T00:26:11.1646678Z         
2025-09-03T00:26:11.1647379Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b1573bec4026cf73936/flexClusters/test-acc-tf-5056861727582132851
2025-09-03T00:26:11.1648149Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-03T00:26:11.1648737Z         Reason: Cannot terminate cluster test-acc-tf-5056861727582132851 in group
2025-09-03T00:26:11.1649355Z         68b78b1573bec4026cf73936 because termination protection is enabled. Disable
2025-09-03T00:26:11.1649992Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-03T00:26:11.1650738Z         terminate cluster test-acc-tf-5056861727582132851 in group
2025-09-03T00:26:11.1651741Z         68b78b1573bec4026cf73936 because termination protection is enabled. Disable
2025-09-03T00:26:11.1652309Z         termination protection and try again.], BadRequestDetail: 
2025-09-03T00:26:11.1652677Z --- FAIL: TestAccFlexClusterRS_basic (13.51s)
```

- 2025-09-04 PASS 51 seconds