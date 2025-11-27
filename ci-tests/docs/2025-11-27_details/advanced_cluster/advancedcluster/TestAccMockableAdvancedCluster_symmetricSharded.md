# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 21) FAIL(x 12)
Success rate: 63.64%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | timeout | 10805.00s
[2025-11-19 00:29](#error-2025-11-19t0029000000) |  | dev | timeout | 10807.01s
[2025-11-19 09:30](#error-2025-11-19t0930050000) |  | dev | timeout | 10807.02s
[2025-11-20 00:28](#error-2025-11-20t0028040000) |  | dev | timeout | 10808.03s
[2025-11-20 10:01](#error-2025-11-20t1001570000) | OUT_OF_CAPACITY /api/atlas/v2/groups/691ee716efafe847b12800e2/clusters | dev | out_of_capacity | 7.03s
[2025-11-21 00:28](#error-2025-11-21t0028310000) |  | dev | timeout | 10807.00s
[2025-11-22 00:26](#error-2025-11-22t0026590000) |  | dev | timeout | 10805.08s
[2025-11-24 00:30](#error-2025-11-24t0030120000) |  | dev | timeout | 10806.04s
[2025-11-25 00:27](#error-2025-11-25t0027240000) |  | dev | timeout | 10805.08s
[2025-11-26 00:28](#error-2025-11-26t0028420000) |  | dev | timeout | 10807.02s
[2025-11-27 00:28](#error-2025-11-27t0028290000) |  | dev | timeout | 10807.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 37 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8271025Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T00:28:22.2607197Z     resource_test.go:668: Adding variable clusterName=test-acc-tf-c-5672443510620728175
2025-10-30T00:28:22.2608232Z     resource_test.go:668: Adding variable groupId=6902b124abf4374f3299781b
2025-10-30T00:29:52.4724699Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T03:29:56.0075063Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T03:29:56.0075833Z     resource_test.go:668: Step 1/3 error: Error running apply: exit status 1
2025-10-30T03:29:56.0076274Z         
2025-10-30T03:29:56.0076571Z         Error: Error in create
2025-10-30T03:29:56.0076866Z         
2025-10-30T03:29:56.0077256Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:56.0078052Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:56.0079102Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:56.0079551Z         
2025-10-30T03:29:56.0080240Z         cluster=test-acc-tf-c-5672443510620728175 didn't reach desired state: IDLE,
2025-10-30T03:29:56.0080805Z         error: context deadline exceeded
2025-10-30T03:29:56.0629157Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10805.03s)
```

- 2025-10-31 PASS 52 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 33 minutes
- 2025-11-04 PASS 35 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 30 minutes
- 2025-11-06 PASS 37 minutes
- 2025-11-07 PASS 31 minutes
- 2025-11-08 PASS 55 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 31 minutes
- 2025-11-11 PASS 31 minutes
- 2025-11-12 PASS 31 minutes
- 2025-11-13 PASS 46 minutes
- 2025-11-14 PASS 35 minutes
- 2025-11-15 PASS 30 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 29 minutes
- 2025-11-18 PASS 30 minutes
- 2025-11-19
  - FAIL 3 hours

### Error 2025-11-19T00:29:00+00:00
```
2025-11-19T00:29:00.7357792Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T00:29:02.9777801Z     resource_test.go:669: Adding variable groupId=691d0f4cb03baf562b975925
2025-11-19T00:29:02.9778871Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-8036281025752077342
2025-11-19T00:35:20.7560063Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T03:35:25.5187159Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T03:35:25.5188108Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-19T03:35:25.5188743Z         
2025-11-19T03:35:25.5189136Z         Error: Error in create
2025-11-19T03:35:25.5189565Z         
2025-11-19T03:35:25.5190121Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T03:35:25.5191281Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T03:35:25.5192374Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T03:35:25.5192896Z         
2025-11-19T03:35:25.5193731Z         cluster=test-acc-tf-c-8036281025752077342 didn't reach desired state: IDLE,
2025-11-19T03:35:25.5194639Z         error: context deadline exceeded
2025-11-19T03:35:25.5718288Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.06s)
```

  - FAIL 3 hours

### Error 2025-11-19T09:30:05+00:00
```
2025-11-19T09:30:05.0252791Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T09:30:07.9694514Z     resource_test.go:669: Adding variable groupId=691d8e1d5ab64e7c55676752
2025-11-19T09:30:07.9695549Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-7171095055542914736
2025-11-19T09:31:55.5679121Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T12:31:59.7714194Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-19T12:31:59.7715050Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-19T12:31:59.7715633Z         
2025-11-19T12:31:59.7716060Z         Error: Error in create
2025-11-19T12:31:59.7716467Z         
2025-11-19T12:31:59.7717036Z           with mongodbatlas_advanced_cluster.test,
2025-11-19T12:31:59.7718114Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-19T12:31:59.7718838Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-19T12:31:59.7719143Z         
2025-11-19T12:31:59.7719791Z         cluster=test-acc-tf-c-7171095055542914736 didn't reach desired state: IDLE,
2025-11-19T12:31:59.7720356Z         error: context deadline exceeded
2025-11-19T12:31:59.8223096Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.20s)
```

- 2025-11-20
  - FAIL 3 hours

### Error 2025-11-20T00:28:04+00:00
```
2025-11-20T00:28:04.5883062Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T00:28:09.4948841Z     resource_test.go:669: Adding variable groupId=691e6094a0b6e4670df2d2d5
2025-11-20T00:28:09.4950112Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-5621554846888160788
2025-11-20T00:29:55.5779657Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T03:29:58.9526075Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T03:29:58.9526713Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-20T03:29:58.9527130Z         
2025-11-20T03:29:58.9527438Z         Error: Error in create
2025-11-20T03:29:58.9527727Z         
2025-11-20T03:29:58.9528379Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T03:29:58.9528969Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T03:29:58.9529691Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T03:29:58.9529996Z         
2025-11-20T03:29:58.9530495Z         cluster=test-acc-tf-c-5621554846888160788 didn't reach desired state: IDLE,
2025-11-20T03:29:58.9530922Z         error: context deadline exceeded
2025-11-20T03:29:59.0001574Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10808.33s)
```

  - FAIL 7 seconds

### Error 2025-11-20T10:01:57+00:00
```
2025-11-20T10:01:57.9373998Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T10:02:00.7944511Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-3525848312119846090
2025-11-20T10:02:00.7945777Z     resource_test.go:669: Adding variable groupId=691ee716efafe847b12800e2
2025-11-20T10:03:33.6646727Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T10:03:37.9588963Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-20T10:03:37.9590965Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-20T10:03:37.9593663Z         
2025-11-20T10:03:37.9594152Z         Error: Error in create
2025-11-20T10:03:37.9595617Z         
2025-11-20T10:03:37.9597200Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T10:03:37.9600740Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T10:03:37.9635419Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T10:03:37.9636311Z         
2025-11-20T10:03:37.9637536Z         cluster name: test-acc-tf-c-3525848312119846090, API error details:
2025-11-20T10:03:37.9638918Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691ee716efafe847b12800e2/clusters
2025-11-20T10:03:37.9640153Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-11-20T10:03:37.9647375Z         region is currently out of capacity for the requested instance size. Reason:
2025-11-20T10:03:37.9648491Z         Conflict. Params: [], BadRequestDetail: 
2025-11-20T10:03:38.1041551Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.30s)
```

- 2025-11-21

### Error 2025-11-21T00:28:31+00:00
```
2025-11-21T00:28:31.2210610Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-21T00:28:33.9751608Z     resource_test.go:669: Adding variable groupId=691fb22fa5aa29482fbeb8e1
2025-11-21T00:28:33.9752560Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-2085170896581085628
2025-11-21T00:30:22.6547213Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-21T03:30:26.8908840Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-21T03:30:26.8909573Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-21T03:30:26.8910147Z         
2025-11-21T03:30:26.8910429Z         Error: Error in create
2025-11-21T03:30:26.8910762Z         
2025-11-21T03:30:26.8911220Z           with mongodbatlas_advanced_cluster.test,
2025-11-21T03:30:26.8911965Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-21T03:30:26.8912659Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-21T03:30:26.8912962Z         
2025-11-21T03:30:26.8913508Z         cluster=test-acc-tf-c-2085170896581085628 didn't reach desired state: IDLE,
2025-11-21T03:30:26.8914066Z         error: context deadline exceeded
2025-11-21T03:30:26.9306332Z    test_working_directory=/tmp/plugintest160986513 test_step_number=1 test_terraform_path=/home/runner/work/_temp/985d4590-f2ee-4e18-b7f2-13295b78d6f0/terraform test_name=TestAccAdvancedCluster_removeBlocksFromConfig
2025-11-21T03:30:26.9440233Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.05s)
```

- 2025-11-22

### Error 2025-11-22T00:26:59+00:00
```
2025-11-22T00:26:59.8555106Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-22T00:27:02.1566888Z     resource_test.go:669: Adding variable groupId=69210353a2a1e670f5294277
2025-11-22T00:27:02.1567880Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-5678487675286343727
2025-11-22T00:28:42.9603490Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-22T03:28:46.3934771Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-22T03:28:46.3935436Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-22T03:28:46.3936061Z         
2025-11-22T03:28:46.3936505Z         Error: Error in create
2025-11-22T03:28:46.3936930Z         
2025-11-22T03:28:46.3937520Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T03:28:46.3938671Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T03:28:46.3939295Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T03:28:46.3939615Z         
2025-11-22T03:28:46.3940081Z         cluster=test-acc-tf-c-5678487675286343727 didn't reach desired state: IDLE,
2025-11-22T03:28:46.3940656Z         error: context deadline exceeded
2025-11-22T03:28:46.4406314Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10805.79s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:12+00:00
```
2025-11-24T00:30:12.1850803Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-24T00:30:13.9751145Z     resource_test.go:669: Adding variable groupId=6923a71421519f56cb860d0a
2025-11-24T00:30:13.9752050Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-177257365014261356
2025-11-24T00:33:24.1939914Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-24T03:33:28.6999949Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-24T03:33:28.7000899Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-24T03:33:28.7001494Z         
2025-11-24T03:33:28.7001899Z         Error: Error in create
2025-11-24T03:33:28.7002289Z         
2025-11-24T03:33:28.7002863Z           with mongodbatlas_advanced_cluster.test,
2025-11-24T03:33:28.7003975Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-24T03:33:28.7005320Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-24T03:33:28.7005799Z         
2025-11-24T03:33:28.7006369Z         cluster=test-acc-tf-c-177257365014261356 didn't reach desired state: IDLE,
2025-11-24T03:33:28.7006950Z         error: context deadline exceeded
2025-11-24T03:33:28.7107232Z    test_name=TestAccAdvancedCluster_removeBlocksFromConfig test_terraform_path=/home/runner/work/_temp/609ccb18-f3a3-412d-a4f5-f3ac64678863/terraform test_working_directory=/tmp/plugintest1694168041 test_step_number=1
2025-11-24T03:33:28.7651321Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10806.38s)
```

- 2025-11-25

### Error 2025-11-25T00:27:24+00:00
```
2025-11-25T00:27:24.5913027Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-25T00:27:26.7553119Z     resource_test.go:669: Adding variable groupId=6924f7ec2b3b85618cf91242
2025-11-25T00:27:26.7554350Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-8662689703791907171
2025-11-25T00:31:51.4391743Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-25T03:31:54.9669731Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-25T03:31:54.9672509Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-25T03:31:54.9673316Z         
2025-11-25T03:31:54.9674281Z         Error: Error in create
2025-11-25T03:31:54.9674753Z         
2025-11-25T03:31:54.9675524Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T03:31:54.9676998Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T03:31:54.9678326Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T03:31:54.9678875Z         
2025-11-25T03:31:54.9679799Z         cluster=test-acc-tf-c-8662689703791907171 didn't reach desired state: IDLE,
2025-11-25T03:31:54.9680605Z         error: context deadline exceeded
2025-11-25T03:31:55.0189679Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10805.77s)
```

- 2025-11-26

### Error 2025-11-26T00:28:42+00:00
```
2025-11-26T00:28:42.2356967Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-26T00:28:44.9752167Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-674906121981866071
2025-11-26T00:28:44.9753069Z     resource_test.go:669: Adding variable groupId=692649bafa65867a021b9db1
2025-11-26T00:30:27.5282943Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-26T03:30:31.9276113Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-26T03:30:31.9276826Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-26T03:30:31.9277374Z         
2025-11-26T03:30:31.9277761Z         Error: Error in create
2025-11-26T03:30:31.9278101Z         
2025-11-26T03:30:31.9278457Z           with mongodbatlas_advanced_cluster.test,
2025-11-26T03:30:31.9279623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-26T03:30:31.9280538Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-26T03:30:31.9281033Z         
2025-11-26T03:30:31.9281835Z         cluster=test-acc-tf-c-674906121981866071 didn't reach desired state: IDLE,
2025-11-26T03:30:31.9282664Z         error: context deadline exceeded
2025-11-26T03:30:31.9299888Z    test_name=TestAccClusterAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/88070532-96c2-4760-b2dd-7952d58b8690/terraform test_working_directory=/tmp/plugintest3006301563
2025-11-26T03:30:31.9804529Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.21s)
```

- 2025-11-27

### Error 2025-11-27T00:28:29+00:00
```
2025-11-27T00:28:29.0765404Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-27T00:28:33.0221933Z     resource_test.go:669: Adding variable groupId=69279b2db358b3221e8cdada
2025-11-27T00:28:33.0222888Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-8447727085156233209
2025-11-27T00:30:06.5291099Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-27T00:30:07.8440596Z   diagnostic_detail=
2025-11-27T00:30:07.8447694Z    diagnostic_summary="Missing Configuration for Required Attribute" diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_advanced_cluster diagnostic_severity=ERROR
2025-11-27T03:30:09.9291720Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-27T03:30:09.9292488Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2025-11-27T03:30:09.9293021Z         
2025-11-27T03:30:09.9293363Z         Error: Error in create
2025-11-27T03:30:09.9293711Z         
2025-11-27T03:30:09.9294078Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T03:30:09.9294833Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T03:30:09.9295538Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T03:30:09.9295854Z         
2025-11-27T03:30:09.9296406Z         cluster=test-acc-tf-c-8447727085156233209 didn't reach desired state: IDLE,
2025-11-27T03:30:09.9296929Z         error: context deadline exceeded
2025-11-27T03:30:09.9751790Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.39s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-02 00:29](#error-2025-11-02t0029450000) |  | qa | 8.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:45+00:00
```
2025-11-02T00:29:45.9169094Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:29:49.6921639Z     resource_test.go:668: Adding variable groupId=6906a5fa5ace12378d296111
2025-11-02T00:29:49.6922519Z     resource_test.go:668: Adding variable clusterName=test-acc-tf-c-5703062514407935548
2025-11-02T00:31:20.5638343Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:31:25.4869601Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:31:25.4870886Z     resource_test.go:668: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.4871528Z         
2025-11-02T00:31:25.4871958Z         Error: Error in create
2025-11-02T00:31:25.4872367Z         
2025-11-02T00:31:25.4872921Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.4874073Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.4875188Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.4875930Z         
2025-11-02T00:31:25.4876644Z         cluster name: test-acc-tf-c-5703062514407935548, API error details:
2025-11-02T00:31:25.4938235Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fa5ace12378d296111/clusters
2025-11-02T00:31:25.4939283Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.4940171Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.4941227Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.4942261Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.4942981Z         BadRequestDetail: 
2025-11-02T00:31:25.7230477Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (8.94s)
```

- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 28 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 31 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 29 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 28 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
