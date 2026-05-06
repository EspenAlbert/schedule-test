# advanced_cluster/advancedcluster/TestAccAdvancedCluster_tls13CustomCiphers Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL(x 15)
Success rate: 57.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d4540fc0b364eb740f63e8/clusters | dev | flaky_500 | 5.03s
[2026-04-08 00:45](#error-2026-04-08t0045300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d5a52774e39a66414a732d/clusters | dev | flaky_500 | 6.01s
[2026-04-08 08:48](#error-2026-04-08t0848510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d6167308daefe17166f286/clusters | dev | flaky_500 | 2.07s
[2026-04-09 00:43](#error-2026-04-09t0043400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d6f63abcd76cc41060901e/clusters | dev | flaky_500 | 5.04s
[2026-04-10 00:44](#error-2026-04-10t0044400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d847f6dd8d8b3ecd3a5b15/clusters | dev | flaky_500 | 6.00s
[2026-04-11 00:48](#error-2026-04-11t0048260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d99a5a92f7ea8dceedbbf8/clusters | dev | flaky_500 | 9.05s
[2026-04-13 00:49](#error-2026-04-13t0049180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69dc3d8c35f1f181a4dd94ad/clusters | dev | flaky_500 | 5.09s
[2026-04-14 00:52](#error-2026-04-14t0052200000) | INVALID_CLUSTER_CONFIGURATION /api/atlas/v2/groups/69dd8fc07e7703c9cb120dd8/clusters | dev |  | 6.01s
[2026-04-15 00:49](#error-2026-04-15t0049330000) | INVALID_CLUSTER_CONFIGURATION /api/atlas/v2/groups/69dee09a353adec0633720cd/clusters | dev |  | 5.07s
[2026-04-16 00:53](#error-2026-04-16t0053180000) | INVALID_CLUSTER_CONFIGURATION /api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters | dev |  | 5.05s
[2026-04-17 00:49](#error-2026-04-17t0049010000) | INVALID_CLUSTER_CONFIGURATION /api/atlas/v2/groups/69e1837b6dfdaa5fce05933d/clusters | dev |  | 5.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:15+00:00
```
2026-04-07T00:47:15.5192988Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-07T00:48:53.7905856Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-07T00:48:59.0354391Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-07T00:48:59.0355340Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-07T00:48:59.0356032Z         
2026-04-07T00:48:59.0356462Z         Error: Error in create
2026-04-07T00:48:59.0356906Z         
2026-04-07T00:48:59.0357507Z           with mongodbatlas_advanced_cluster.test,
2026-04-07T00:48:59.0358716Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-07T00:48:59.0360105Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-07T00:48:59.0360699Z         
2026-04-07T00:48:59.0361789Z         cluster name: test-acc-tf-c-5938980821495449652, API error details:
2026-04-07T00:48:59.0366249Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4540fc0b364eb740f63e8/clusters
2026-04-07T00:48:59.0367696Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-07T00:48:59.0368762Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-07T00:48:59.0392243Z         BadRequestDetail: 
2026-04-07T00:48:59.1044453Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.33s)
```

- 2026-04-08
  - FAIL 6 seconds

### Error 2026-04-08T00:45:30+00:00
```
2026-04-08T00:45:30.7205093Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T00:46:47.8973259Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T00:46:53.2804458Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T00:46:53.2842815Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-08T00:46:53.2843832Z         
2026-04-08T00:46:53.2844534Z         Error: Error in create
2026-04-08T00:46:53.2845222Z         
2026-04-08T00:46:53.2846057Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T00:46:53.2847615Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T00:46:53.2849280Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T00:46:53.2850017Z         
2026-04-08T00:46:53.2851002Z         cluster name: test-acc-tf-c-3410997220284240574, API error details:
2026-04-08T00:46:53.2852641Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a52774e39a66414a732d/clusters
2026-04-08T00:46:53.2854273Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T00:46:53.2855788Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T00:46:53.2856737Z         BadRequestDetail: 
2026-04-08T00:46:53.3345653Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.12s)
```

  - FAIL 2 seconds

### Error 2026-04-08T08:48:51+00:00
```
2026-04-08T08:48:51.4176901Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T08:48:53.4781495Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T08:48:54.1036036Z   
2026-04-08T08:48:54.1043444Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-08T08:48:54.1044084Z         
2026-04-08T08:48:54.1044622Z         Error: Error in create
2026-04-08T08:48:54.1045327Z         
2026-04-08T08:48:54.1049262Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T08:48:54.1050408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T08:48:54.1051762Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T08:48:54.1052279Z         
2026-04-08T08:48:54.1052913Z         cluster name: test-acc-tf-c-2054599434610762595, API error details:
2026-04-08T08:48:54.1053733Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6167308daefe17166f286/clusters
2026-04-08T08:48:54.1054571Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T08:48:54.1055177Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T08:48:54.1055586Z         BadRequestDetail: 
2026-04-08T08:48:54.1535804Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (2.74s)
```

- 2026-04-09

### Error 2026-04-09T00:43:40+00:00
```
2026-04-09T00:43:40.9729422Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-09T00:48:13.5527071Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-09T00:48:18.4851988Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-09T00:48:18.4852540Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:48:18.4852939Z         
2026-04-09T00:48:18.4853190Z         Error: Error in create
2026-04-09T00:48:18.4853438Z         
2026-04-09T00:48:18.4854023Z           with mongodbatlas_advanced_cluster.test,
2026-04-09T00:48:18.4855137Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-09T00:48:18.4856332Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-09T00:48:18.4856833Z         
2026-04-09T00:48:18.4857457Z         cluster name: test-acc-tf-c-4274249136163935983, API error details:
2026-04-09T00:48:18.4858648Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f63abcd76cc41060901e/clusters
2026-04-09T00:48:18.4859878Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-09T00:48:18.4861111Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-09T00:48:18.4861825Z         BadRequestDetail: 
2026-04-09T00:48:18.5452170Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.37s)
```

- 2026-04-10

### Error 2026-04-10T00:44:40+00:00
```
2026-04-10T00:44:40.3817725Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-10T00:46:02.3894110Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-10T00:46:08.1527791Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-10T00:46:08.1568034Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-10T00:46:08.1650772Z         
2026-04-10T00:46:08.1689349Z         Error: Error in create
2026-04-10T00:46:08.1719316Z         
2026-04-10T00:46:08.1768242Z           with mongodbatlas_advanced_cluster.test,
2026-04-10T00:46:08.1811225Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-10T00:46:08.1816717Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-10T00:46:08.1817460Z         
2026-04-10T00:46:08.1818363Z         cluster name: test-acc-tf-c-7668393451831944226, API error details:
2026-04-10T00:46:08.1819853Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d847f6dd8d8b3ecd3a5b15/clusters
2026-04-10T00:46:08.1821168Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-10T00:46:08.1822292Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-10T00:46:08.1823087Z         BadRequestDetail: 
2026-04-10T00:46:08.2680369Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.04s)
```

- 2026-04-11

### Error 2026-04-11T00:48:26+00:00
```
2026-04-11T00:48:26.1524873Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-11T00:49:46.1278268Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-11T00:49:50.7501113Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-11T00:49:50.7502704Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:49:50.7503431Z         
2026-04-11T00:49:50.7503703Z         Error: Error in create
2026-04-11T00:49:50.7503966Z         
2026-04-11T00:49:50.7504311Z           with mongodbatlas_advanced_cluster.test,
2026-04-11T00:49:50.7505010Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-11T00:49:50.7509704Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-11T00:49:50.7510283Z         
2026-04-11T00:49:50.7511109Z         cluster name: test-acc-tf-c-1043176051233433674, API error details:
2026-04-11T00:49:50.7512569Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d99a5a92f7ea8dceedbbf8/clusters
2026-04-11T00:49:50.7513820Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-11T00:49:50.7514861Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-11T00:49:50.7515537Z         BadRequestDetail: 
2026-04-11T00:49:50.7981776Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (9.53s)
```

- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T00:49:18+00:00
```
2026-04-13T00:49:18.3863461Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-13T00:50:31.2785744Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-13T00:50:36.5395805Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-13T00:50:36.5396793Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-13T00:50:36.5397532Z         
2026-04-13T00:50:36.5397990Z         Error: Error in create
2026-04-13T00:50:36.5398478Z         
2026-04-13T00:50:36.5398997Z           with mongodbatlas_advanced_cluster.test,
2026-04-13T00:50:36.5399897Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-13T00:50:36.5400806Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-13T00:50:36.5401153Z         
2026-04-13T00:50:36.5401592Z         cluster name: test-acc-tf-c-7842865776140559348, API error details:
2026-04-13T00:50:36.5402465Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dc3d8c35f1f181a4dd94ad/clusters
2026-04-13T00:50:36.5403739Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-13T00:50:36.5404828Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-13T00:50:36.5405564Z         BadRequestDetail: 
2026-04-13T00:50:36.6483909Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.90s)
```

- 2026-04-14

### Error 2026-04-14T00:52:20+00:00
```
2026-04-14T00:52:20.2593431Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-14T00:53:47.9928511Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-14T00:53:54.0528059Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-14T00:53:54.0528571Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-14T00:53:54.0528940Z         
2026-04-14T00:53:54.0529281Z         Error: Error in create
2026-04-14T00:53:54.0529528Z         
2026-04-14T00:53:54.0529863Z           with mongodbatlas_advanced_cluster.test,
2026-04-14T00:53:54.0530575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-14T00:53:54.0531425Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-14T00:53:54.0531739Z         
2026-04-14T00:53:54.0532215Z         cluster name: test-acc-tf-c-6464216675305347447, API error details:
2026-04-14T00:53:54.0533061Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dd8fc07e7703c9cb120dd8/clusters
2026-04-14T00:53:54.0533705Z         POST: HTTP 400 Bad Request (Error code: "INVALID_CLUSTER_CONFIGURATION")
2026-04-14T00:53:54.0534302Z         Detail: The specified cluster configuration is not valid: TLS 1.3 is not
2026-04-14T00:53:54.0534903Z         available for new configurations. Please contact support to enable this
2026-04-14T00:53:54.0535486Z         feature.. Reason: Bad Request. Params: [TLS 1.3 is not available for new
2026-04-14T00:53:54.0536059Z         configurations. Please contact support to enable this feature.],
2026-04-14T00:53:54.0536456Z         BadRequestDetail: 
2026-04-14T00:53:54.1024286Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.13s)
```

- 2026-04-15

### Error 2026-04-15T00:49:33+00:00
```
2026-04-15T00:49:33.3096127Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-15T00:50:47.1052200Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-15T00:50:52.1715791Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-15T00:50:52.1716952Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-15T00:50:52.1717986Z         
2026-04-15T00:50:52.1718543Z         Error: Error in create
2026-04-15T00:50:52.1719360Z         
2026-04-15T00:50:52.1720126Z           with mongodbatlas_advanced_cluster.test,
2026-04-15T00:50:52.1721725Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-15T00:50:52.1723248Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-15T00:50:52.1724053Z         
2026-04-15T00:50:52.1725045Z         cluster name: test-acc-tf-c-6383159767964626675, API error details:
2026-04-15T00:50:52.1726867Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dee09a353adec0633720cd/clusters
2026-04-15T00:50:52.1728333Z         POST: HTTP 400 Bad Request (Error code: "INVALID_CLUSTER_CONFIGURATION")
2026-04-15T00:50:52.1729610Z         Detail: The specified cluster configuration is not valid: TLS 1.3 is not
2026-04-15T00:50:52.1730756Z         available for new configurations. Please contact support to enable this
2026-04-15T00:50:52.1732067Z         feature.. Reason: Bad Request. Params: [TLS 1.3 is not available for new
2026-04-15T00:50:52.1733310Z         configurations. Please contact support to enable this feature.],
2026-04-15T00:50:52.1734093Z         BadRequestDetail: 
2026-04-15T00:50:52.2693468Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.70s)
```

- 2026-04-16

### Error 2026-04-16T00:53:18+00:00
```
2026-04-16T00:53:18.2002146Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-16T00:54:53.9851840Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-16T00:54:59.3650550Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-16T00:54:59.3651636Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:54:59.3652501Z         
2026-04-16T00:54:59.3653295Z         Error: Error in create
2026-04-16T00:54:59.3653917Z         
2026-04-16T00:54:59.3654937Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.3656628Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.3658060Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.3658825Z         
2026-04-16T00:54:59.3659707Z         cluster name: test-acc-tf-c-3187604270002599545, API error details:
2026-04-16T00:54:59.3661129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters
2026-04-16T00:54:59.3662609Z         POST: HTTP 400 Bad Request (Error code: "INVALID_CLUSTER_CONFIGURATION")
2026-04-16T00:54:59.3663965Z         Detail: The specified cluster configuration is not valid: TLS 1.3 is not
2026-04-16T00:54:59.3665704Z         available for new configurations. Please contact support to enable this
2026-04-16T00:54:59.3667073Z         feature.. Reason: Bad Request. Params: [TLS 1.3 is not available for new
2026-04-16T00:54:59.3668350Z         configurations. Please contact support to enable this feature.],
2026-04-16T00:54:59.3669274Z         BadRequestDetail: 
2026-04-16T00:54:59.6383954Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.53s)
```

- 2026-04-17

### Error 2026-04-17T00:49:01+00:00
```
2026-04-17T00:49:01.5733627Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-17T00:50:13.7432113Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-17T00:50:19.4870405Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-17T00:50:19.4871596Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-17T00:50:19.4872397Z         
2026-04-17T00:50:19.4873638Z         Error: Error in create
2026-04-17T00:50:19.4874372Z         
2026-04-17T00:50:19.4875254Z           with mongodbatlas_advanced_cluster.test,
2026-04-17T00:50:19.4876783Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-17T00:50:19.4878193Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-17T00:50:19.4879051Z         
2026-04-17T00:50:19.4879941Z         cluster name: test-acc-tf-c-2283118283240978273, API error details:
2026-04-17T00:50:19.4881465Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e1837b6dfdaa5fce05933d/clusters
2026-04-17T00:50:19.4883036Z         POST: HTTP 400 Bad Request (Error code: "INVALID_CLUSTER_CONFIGURATION")
2026-04-17T00:50:19.4884329Z         Detail: The specified cluster configuration is not valid: TLS 1.3 is not
2026-04-17T00:50:19.4885866Z         available for new configurations. Please contact support to enable this
2026-04-17T00:50:19.4887204Z         feature.. Reason: Bad Request. Params: [TLS 1.3 is not available for new
2026-04-17T00:50:19.4888544Z         configurations. Please contact support to enable this feature.],
2026-04-17T00:50:19.4918562Z         BadRequestDetail: 
2026-04-17T00:50:19.6239583Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (5.88s)
```

- 2026-04-18 PASS 28 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 27 minutes
- 2026-04-22 PASS 30 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 19 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 minutes
- 2026-04-28 PASS 20 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 19 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 31 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 06:01](#error-2026-04-08t0601570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d5ef5253a6e805f2299dbc/clusters | qa | flaky_500 | 6.01s
[2026-04-08 07:13](#error-2026-04-08t0713250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d600142df056f80ce87ccf/clusters | qa | flaky_500 | 6.02s
[2026-04-08 08:40](#error-2026-04-08t0840190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d614734d3f216b8b2fd768/clusters | qa | flaky_500 | 4.06s
[2026-04-12 00:48](#error-2026-04-12t0048280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69daebda97e3b71a706670d2/clusters | qa | flaky_500 | 6.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - FAIL 6 seconds

### Error 2026-04-08T06:01:57+00:00
```
2026-04-08T06:01:57.4521624Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T06:03:58.4610794Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T06:04:04.1431094Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T06:04:04.1432210Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-08T06:04:04.1433054Z         
2026-04-08T06:04:04.1433628Z         Error: Error in create
2026-04-08T06:04:04.1434245Z         
2026-04-08T06:04:04.1434961Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T06:04:04.1436293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T06:04:04.1437553Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T06:04:04.1438455Z         
2026-04-08T06:04:04.1439567Z         cluster name: test-acc-tf-c-893472253568292346, API error details:
2026-04-08T06:04:04.1440973Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d5ef5253a6e805f2299dbc/clusters
2026-04-08T06:04:04.1442403Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T06:04:04.1443634Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T06:04:04.1444463Z         BadRequestDetail: 
2026-04-08T06:04:04.2154728Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.07s)
```

  - FAIL 6 seconds

### Error 2026-04-08T07:13:25+00:00
```
2026-04-08T07:13:25.8859579Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T07:14:41.5053640Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T07:14:47.3781823Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T07:14:47.3782767Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-08T07:14:47.3783444Z         
2026-04-08T07:14:47.3783869Z         Error: Error in create
2026-04-08T07:14:47.3784275Z         
2026-04-08T07:14:47.3785014Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T07:14:47.3786180Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T07:14:47.3787256Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T07:14:47.3787796Z         
2026-04-08T07:14:47.3788494Z         cluster name: test-acc-tf-c-6453756061756488593, API error details:
2026-04-08T07:14:47.3789649Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d600142df056f80ce87ccf/clusters
2026-04-08T07:14:47.3790888Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T07:14:47.3791962Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T07:14:47.3792624Z         BadRequestDetail: 
2026-04-08T07:14:47.6806400Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.21s)
```

  - FAIL 4 seconds

### Error 2026-04-08T08:40:19+00:00
```
2026-04-08T08:40:19.7309048Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T08:40:23.6171870Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-08T08:40:24.3008087Z   
2026-04-08T08:40:24.3009044Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-08T08:40:24.3009697Z         
2026-04-08T08:40:24.3010144Z         Error: Error in create
2026-04-08T08:40:24.3010590Z         
2026-04-08T08:40:24.3011179Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T08:40:24.3012404Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T08:40:24.3013799Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T08:40:24.3014343Z         
2026-04-08T08:40:24.3015121Z         cluster name: test-acc-tf-c-29908853120551670, API error details:
2026-04-08T08:40:24.3016544Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d614734d3f216b8b2fd768/clusters
2026-04-08T08:40:24.3017837Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T08:40:24.3018936Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T08:40:24.3019668Z         BadRequestDetail: 
2026-04-08T08:40:24.3493637Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (4.62s)
```

- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:48:28+00:00
```
2026-04-12T00:48:28.4983031Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-04-12T00:50:48.1158672Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-12T00:50:53.8694799Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-04-12T00:50:53.8695766Z     resource_test.go:2074: Step 1/1 error: Error running apply: exit status 1
2026-04-12T00:50:53.8696519Z         
2026-04-12T00:50:53.8697044Z         Error: Error in create
2026-04-12T00:50:53.8697528Z         
2026-04-12T00:50:53.8698184Z           with mongodbatlas_advanced_cluster.test,
2026-04-12T00:50:53.8699540Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-12T00:50:53.8700723Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-12T00:50:53.8701370Z         
2026-04-12T00:50:53.8702218Z         cluster name: test-acc-tf-c-3656003737364948110, API error details:
2026-04-12T00:50:53.8703484Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69daebda97e3b71a706670d2/clusters
2026-04-12T00:50:53.8705099Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-12T00:50:53.8706415Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-12T00:50:53.8707631Z         BadRequestDetail: 
2026-04-12T00:50:53.9705199Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.30s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
