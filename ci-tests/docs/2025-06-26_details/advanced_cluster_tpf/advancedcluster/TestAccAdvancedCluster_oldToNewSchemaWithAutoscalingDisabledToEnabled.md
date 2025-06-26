# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 41) FAIL(x 2)
Success rate: 95.35%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 22 minutes
```
2025-05-28T02:03:35.3254565Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T02:03:35.3293650Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T02:03:35.3353398Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T02:03:35.3354320Z     pre_check.go:40: Time before creating cluster: 2025-05-28T01:17:18.73284632Z, ProjectID: 6836637ff0ae6f5f45e847f7, Cluster name: test-acc-tf-c-353718977864394537
2025-05-28T02:03:35.3421292Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1344.46s)
```
#### FAIL 19 minutes
```
2025-05-28T12:04:46.9815386Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9846565Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9953537Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:46.9954464Z     pre_check.go:40: Time before creating cluster: 2025-05-28T09:04:36.045468203Z, ProjectID: 6836d109e6404f5026cf2025, Cluster name: test-acc-tf-c-1094122749405850305
2025-05-28T12:04:47.0028240Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T12:04:47.0028935Z     resource_advanced_cluster_test.go:1221: Step 1/4 error: Error running apply: exit status 1
2025-05-28T12:04:47.0029356Z         
2025-05-28T12:04:47.0029741Z         Error: error reading Advanced Configuration from legacy API
2025-05-28T12:04:47.0030070Z         
2025-05-28T12:04:47.0030448Z           with data.mongodbatlas_advanced_cluster.test,
2025-05-28T12:04:47.0031074Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2025-05-28T12:04:47.0031634Z           39: 	data "mongodbatlas_advanced_cluster" "test" {
2025-05-28T12:04:47.0032144Z         
2025-05-28T12:04:47.0032595Z         cluster name: test-acc-tf-c-1094122749405850305, API error details: undefined
2025-05-28T12:04:47.0033005Z         response type
2025-05-28T12:04:47.0033221Z         
2025-05-28T12:04:47.0033522Z         Error: error reading Advanced Configuration
2025-05-28T12:04:47.0033800Z         
2025-05-28T12:04:47.0034145Z           with data.mongodbatlas_advanced_clusters.test,
2025-05-28T12:04:47.0034774Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2025-05-28T12:04:47.0035336Z           45: 	data "mongodbatlas_advanced_clusters" "test" {
2025-05-28T12:04:47.0035632Z         
2025-05-28T12:04:47.0036050Z         cluster name: test-acc-tf-c-8078458139413025165, API error details: (503
2025-05-28T12:04:47.0036677Z         Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:04:47.0064857Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1161.37s)
```
#### PASS 24 minutes
```
2025-05-28T13:47:12.0025897Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T13:47:12.0042243Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T13:47:12.0092328Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-28T13:47:12.0093295Z     pre_check.go:40: Time before creating cluster: 2025-05-28T12:50:16.826719452Z, ProjectID: 6837061a541cf637391c13b6, Cluster name: test-acc-tf-c-1769709849881254611
2025-05-28T13:47:12.0178851Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1498.61s)
```
### 2025-05-29
#### PASS 28 minutes
```
2025-05-29T02:20:21.7285921Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-29T02:20:21.7302897Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-29T02:20:21.7353545Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-29T02:20:21.7355139Z     pre_check.go:40: Time before creating cluster: 2025-05-29T01:06:05.146729189Z, ProjectID: 6837b2823945df7a919181ac, Cluster name: test-acc-tf-c-177892052052931978
2025-05-29T02:20:21.7455011Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1733.74s)
```
### 2025-05-30
#### PASS an hour
```
2025-05-30T03:30:24.2327993Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T03:30:24.2348118Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T03:30:24.2381512Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T03:30:24.2382682Z     pre_check.go:40: Time before creating cluster: 2025-05-30T01:02:36.840594126Z, ProjectID: 68390341633e350548a5b0ba, Cluster name: test-acc-tf-c-8336817588929406982
2025-05-30T03:30:24.2480606Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (5764.24s)
```
#### PASS 28 minutes
```
2025-05-30T08:55:11.7578736Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T08:55:11.7603675Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T08:55:11.7662788Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-30T08:55:11.7663827Z     pre_check.go:40: Time before creating cluster: 2025-05-30T07:59:12.703981183Z, ProjectID: 683964da12efeb384251ab30, Cluster name: test-acc-tf-c-851489237359176345
2025-05-30T08:55:11.7745353Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1698.72s)
```
### 2025-05-31
#### PASS 25 minutes
```
2025-05-31T04:18:53.2257755Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-31T04:18:53.2277373Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-31T04:18:53.2331525Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-31T04:18:53.2332563Z     pre_check.go:40: Time before creating cluster: 2025-05-31T01:03:53.797815191Z, ProjectID: 683a54f26980316aa7dba30d, Cluster name: test-acc-tf-c-7229978840480398180
2025-05-31T04:18:53.2407296Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1558.96s)
```
### 2025-06-01
#### PASS 20 minutes
```
2025-06-01T04:20:15.0549248Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T04:20:15.0579498Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T04:20:15.0636670Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T04:20:15.0637621Z     pre_check.go:40: Time before creating cluster: 2025-06-01T01:06:40.053760063Z, ProjectID: 683ba70e2ebc1806778a32ed, Cluster name: test-acc-tf-c-6598089268076770809
2025-06-01T04:20:15.0697951Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1253.13s)
```
#### PASS 22 minutes
```
2025-06-01T08:29:24.1343046Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T08:29:24.1367848Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T08:29:24.1442934Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T08:29:24.1443884Z     pre_check.go:40: Time before creating cluster: 2025-06-01T05:15:47.465282509Z, ProjectID: 683be15dcc8f0935c7c1bd79, Cluster name: test-acc-tf-c-2523944325668743868
2025-06-01T08:29:24.1500387Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1358.66s)
```
#### PASS 21 minutes
```
2025-06-01T12:36:46.3897425Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T12:36:46.3938448Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T12:36:46.4000711Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T12:36:46.4001640Z     pre_check.go:40: Time before creating cluster: 2025-06-01T09:24:46.89610998Z, ProjectID: 683c1bcd7bf9cf70212cec46, Cluster name: test-acc-tf-c-5332530146774940214
2025-06-01T12:36:46.4063628Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1277.63s)
```
#### PASS 21 minutes
```
2025-06-01T16:46:33.8336084Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T16:46:33.8361914Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T16:46:33.8429128Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T16:46:33.8430073Z     pre_check.go:40: Time before creating cluster: 2025-06-01T13:33:19.641556505Z, ProjectID: 683c56107bf9cf70212d5011, Cluster name: test-acc-tf-c-9146669840115495992
2025-06-01T16:46:33.8492101Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1304.76s)
```
#### PASS 22 minutes
```
2025-06-01T20:56:30.1368863Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T20:56:30.1411146Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T20:56:30.1470844Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-01T20:56:30.1471816Z     pre_check.go:40: Time before creating cluster: 2025-06-01T17:43:45.508181915Z, ProjectID: 683c90c9cc8f0935c7c3264f, Cluster name: test-acc-tf-c-6832528737644362463
2025-06-01T20:56:30.1539435Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1360.88s)
```
### 2025-06-02
#### PASS 20 minutes
```
2025-06-02T01:07:47.7500490Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T01:07:47.7517367Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T01:07:47.7560639Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T01:07:47.7562389Z     pre_check.go:40: Time before creating cluster: 2025-06-01T21:51:03.815981744Z, ProjectID: 683ccad97bf9cf70212e2704, Cluster name: test-acc-tf-c-4249822708737614914
2025-06-02T01:07:47.7736583Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1233.14s)
```
#### PASS 22 minutes
```
2025-06-02T04:19:30.0992268Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T04:19:30.1023398Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T04:19:30.1079769Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T04:19:30.1080703Z     pre_check.go:40: Time before creating cluster: 2025-06-02T01:06:03.500257428Z, ProjectID: 683cf8607bf9cf70212e77b6, Cluster name: test-acc-tf-c-4842771007789906716
2025-06-02T04:19:30.1145975Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1337.49s)
```
#### PASS 23 minutes
```
2025-06-02T05:16:34.1952189Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T05:16:34.1983285Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T05:16:34.2050499Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T05:16:34.2051462Z     pre_check.go:40: Time before creating cluster: 2025-06-02T02:04:25.200929614Z, ProjectID: 683d060e7bf9cf70212ec1dc, Cluster name: test-acc-tf-c-1343320341438548078
2025-06-02T05:16:34.2108204Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1411.57s)
```
#### PASS 23 minutes
```
2025-06-02T09:30:51.2598054Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T09:30:51.2660446Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T09:30:51.2740632Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-02T09:30:51.2741587Z     pre_check.go:40: Time before creating cluster: 2025-06-02T06:16:10.861124524Z, ProjectID: 683d4104cc8f0935c7c4b199, Cluster name: test-acc-tf-c-974944326264121814
2025-06-02T09:30:51.2798204Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1386.95s)
```
### 2025-06-03
#### PASS 25 minutes
```
2025-06-03T02:00:08.0979213Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-03T02:00:08.1006397Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-03T02:00:08.1066320Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-03T02:00:08.1067246Z     pre_check.go:40: Time before creating cluster: 2025-06-03T01:06:58.754098861Z, ProjectID: 683e4a11c5fc37283c363f96, Cluster name: test-acc-tf-c-8219503510725381661
2025-06-03T02:00:08.1126645Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1543.93s)
```
### 2025-06-04
#### PASS 24 minutes
```
2025-06-04T01:50:55.4333475Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-04T01:50:55.4352441Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-04T01:50:55.4403949Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-04T01:50:55.4404995Z     pre_check.go:40: Time before creating cluster: 2025-06-04T00:56:09.728596456Z, ProjectID: 683f9923040e94654178896b, Cluster name: test-acc-tf-c-3769346077082019898
2025-06-04T01:50:55.4481450Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1448.89s)
```
### 2025-06-05
#### FAIL a minute
```
2025-06-05T00:35:38.5909424Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.5950758Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.6754018Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:38.6754653Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:26.020769897Z, ProjectID: 6840e4de161ca93c1f0532d2, Cluster name: test-acc-tf-c-2409326044586497798
2025-06-05T00:35:38.6760775Z   
2025-06-05T00:35:38.6761127Z     resource_advanced_cluster_test.go:1221: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:35:38.6761226Z         
2025-06-05T00:35:38.6761401Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6761485Z         
2025-06-05T00:35:38.6761715Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6762162Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6762433Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6762525Z         
2025-06-05T00:35:38.6762842Z         cluster name: test-acc-tf-c-2409326044586497798, API error details:
2025-06-05T00:35:38.6763254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4de161ca93c1f0532d2/clusters
2025-06-05T00:35:38.6763612Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6763908Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6764051Z         BadRequestDetail: 
2025-06-05T00:35:38.6764335Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (62.79s)
```
### 2025-06-06
#### PASS 25 minutes
```
2025-06-06T05:30:18.8787455Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-06T05:30:18.8818928Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-06T05:30:18.8913253Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-06T05:30:18.8914971Z     pre_check.go:40: Time before creating cluster: 2025-06-06T01:02:36.384688881Z, ProjectID: 68423d8c8dba3d3587c4f78e, Cluster name: test-acc-tf-c-438999960438075975
2025-06-06T05:30:18.9042935Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1522.59s)
```
### 2025-06-07
#### PASS 17 minutes
```
2025-06-07T01:49:34.5066527Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-07T01:49:34.5099921Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-07T01:49:34.5154481Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-07T01:49:34.5155411Z     pre_check.go:40: Time before creating cluster: 2025-06-07T00:57:19.015321673Z, ProjectID: 68438dcfbf49d05598c17aeb, Cluster name: test-acc-tf-c-3750069285037831058
2025-06-07T01:49:34.5201239Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1075.44s)
```
### 2025-06-08
#### PASS 17 minutes
```
2025-06-08T01:48:59.8878848Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-08T01:48:59.8921095Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-08T01:48:59.8976397Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-08T01:48:59.8977318Z     pre_check.go:40: Time before creating cluster: 2025-06-08T00:58:09.630112233Z, ProjectID: 6844df900b3c4a5b49f6dbd9, Cluster name: test-acc-tf-c-612569607979600451
2025-06-08T01:48:59.9027818Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1064.93s)
```
### 2025-06-09
#### PASS 22 minutes
```
2025-06-09T04:06:35.6361768Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-09T04:06:35.6378202Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-09T04:06:35.6428426Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-09T04:06:35.6429358Z     pre_check.go:40: Time before creating cluster: 2025-06-09T00:57:38.969265961Z, ProjectID: 6846310f0a8f6759322c61e9, Cluster name: test-acc-tf-c-765461964351507587
2025-06-09T04:06:35.6500703Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1346.17s)
```
### 2025-06-10
#### PASS 20 minutes
```
2025-06-10T02:43:46.9818281Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-10T02:43:46.9836869Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-10T02:43:46.9884890Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-10T02:43:46.9885799Z     pre_check.go:40: Time before creating cluster: 2025-06-10T01:17:52.635011382Z, ProjectID: 68478745a888514df22aa3ac, Cluster name: test-acc-tf-c-2747282677431966475
2025-06-10T02:43:46.9931739Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1245.61s)
```
### 2025-06-11
#### PASS 17 minutes
```
2025-06-11T01:51:36.5521014Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T01:51:36.5541258Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T01:51:36.5597930Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T01:51:36.5598866Z     pre_check.go:40: Time before creating cluster: 2025-06-11T00:57:20.727539479Z, ProjectID: 6848d3f57856163396c4c72f, Cluster name: test-acc-tf-c-6265309376089937013
2025-06-11T01:51:36.5659959Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1046.20s)
```
#### PASS 19 minutes
```
2025-06-11T09:05:12.3244195Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T09:05:12.3273570Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T09:05:12.3360012Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-11T09:05:12.3361709Z     pre_check.go:40: Time before creating cluster: 2025-06-11T08:01:59.735101134Z, ProjectID: 6849378a71e0a97458c8cf63, Cluster name: test-acc-tf-c-3015580657477120828
2025-06-11T09:05:12.3494130Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1152.04s)
```
### 2025-06-12
#### PASS 18 minutes
```
2025-06-12T01:54:44.2905311Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-12T01:54:44.2927320Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-12T01:54:44.2980508Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-12T01:54:44.2981424Z     pre_check.go:40: Time before creating cluster: 2025-06-12T00:59:25.356084102Z, ProjectID: 684a25c9be881b610a4fe46b, Cluster name: test-acc-tf-c-1529355123107655637
2025-06-12T01:54:44.3041642Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1104.40s)
```
### 2025-06-13
#### PASS 21 minutes
```
2025-06-13T01:55:30.6475262Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-13T01:55:30.6495417Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-13T01:55:30.6550819Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-13T01:55:30.6551898Z     pre_check.go:40: Time before creating cluster: 2025-06-13T01:00:04.188942151Z, ProjectID: 684b776be5be291c80ec32c0, Cluster name: test-acc-tf-c-3432410063070136861
2025-06-13T01:55:30.6617735Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1286.43s)
```
### 2025-06-14
#### PASS 28 minutes
```
2025-06-14T02:34:39.9637278Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-14T02:34:39.9668560Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-14T02:34:39.9710879Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-14T02:34:39.9711820Z     pre_check.go:40: Time before creating cluster: 2025-06-14T01:01:32.026615838Z, ProjectID: 684cc9468f295e188b9ca219, Cluster name: test-acc-tf-c-9065122221030764876
2025-06-14T02:34:39.9808725Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1698.23s)
```
### 2025-06-15
#### PASS 18 minutes
```
2025-06-15T01:56:51.5956623Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-15T01:56:51.6011323Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-15T01:56:51.6122152Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-15T01:56:51.6123711Z     pre_check.go:40: Time before creating cluster: 2025-06-15T01:02:40.378383824Z, ProjectID: 684e1aeb83e3896e131b01f5, Cluster name: test-acc-tf-c-5466348082622155065
2025-06-15T01:56:51.6207495Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1087.90s)
```
### 2025-06-16
#### PASS 21 minutes
```
2025-06-16T02:15:00.6566780Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-16T02:15:00.6592742Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-16T02:15:00.6646303Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-16T02:15:00.6647224Z     pre_check.go:40: Time before creating cluster: 2025-06-16T01:06:04.792063784Z, ProjectID: 684f6d3f8f295e188b9ef91f, Cluster name: test-acc-tf-c-5367327836570827791
2025-06-16T02:15:00.6698396Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1274.31s)
```
### 2025-06-17
#### PASS 18 minutes
```
2025-06-17T01:54:49.3062011Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-17T01:54:49.3097337Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-17T01:54:49.3157234Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-17T01:54:49.3158173Z     pre_check.go:40: Time before creating cluster: 2025-06-17T00:57:45.281110494Z, ProjectID: 6850bcce4283fe24ea0bddbc, Cluster name: test-acc-tf-c-3937822854129451
2025-06-17T01:54:49.3218932Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1082.33s)
```
### 2025-06-18
#### PASS 20 minutes
```
2025-06-18T01:55:10.7241906Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T01:55:10.7273255Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T01:55:10.7339465Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T01:55:10.7340519Z     pre_check.go:40: Time before creating cluster: 2025-06-18T01:00:02.358239389Z, ProjectID: 68520edef40f964ca92fe91a, Cluster name: test-acc-tf-c-3944019734956720405
2025-06-18T01:55:10.7405378Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1236.04s)
```
#### PASS 16 minutes
```
2025-06-18T08:48:56.0170812Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T08:48:56.0191167Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T08:48:56.0254382Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-18T08:48:56.0255320Z     pre_check.go:40: Time before creating cluster: 2025-06-18T07:56:48.497616857Z, ProjectID: 685270a8926cc210b0182d76, Cluster name: test-acc-tf-c-7830519816249957611
2025-06-18T08:48:56.0316226Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1017.53s)
```
### 2025-06-19
#### PASS 45 minutes
```
2025-06-19T02:33:55.9838270Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-19T02:33:55.9856884Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-19T02:33:55.9903784Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-19T02:33:55.9904745Z     pre_check.go:40: Time before creating cluster: 2025-06-19T01:05:37.338335838Z, ProjectID: 685361d8cd32be2bdf88eb17, Cluster name: test-acc-tf-c-6492299826614053620
2025-06-19T02:33:55.9980467Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (2710.09s)
```
### 2025-06-20
#### PASS 17 minutes
```
2025-06-20T01:46:12.3358653Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-20T01:46:12.3391735Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-20T01:46:12.3437965Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-20T01:46:12.3438889Z     pre_check.go:40: Time before creating cluster: 2025-06-20T00:59:26.534647447Z, ProjectID: 6854b1b2cd32be2bdf8c2905, Cluster name: test-acc-tf-c-1904067423625903494
2025-06-20T01:46:12.3495030Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1040.49s)
```
### 2025-06-21
#### PASS 19 minutes
```
2025-06-21T01:47:13.0101759Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-21T01:47:13.0130493Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-21T01:47:13.0187095Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-21T01:47:13.0188011Z     pre_check.go:40: Time before creating cluster: 2025-06-21T00:59:09.700199587Z, ProjectID: 68560338f3e6555d2acbb134, Cluster name: test-acc-tf-c-2147177318197422033
2025-06-21T01:47:13.0243837Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1197.79s)
```
### 2025-06-22
#### PASS 17 minutes
```
2025-06-22T03:04:12.6128352Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-22T03:04:12.6147300Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-22T03:04:12.6180574Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-22T03:04:12.6182314Z     pre_check.go:40: Time before creating cluster: 2025-06-22T01:02:08.952789084Z, ProjectID: 68575589af7a0954e84b07e7, Cluster name: test-acc-tf-c-5595406728694760489
2025-06-22T03:04:12.6366997Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1023.21s)
```
### 2025-06-23
#### PASS 17 minutes
```
2025-06-23T01:49:14.0954329Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-23T01:49:14.0990292Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-23T01:49:14.1068568Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-23T01:49:14.1069475Z     pre_check.go:40: Time before creating cluster: 2025-06-23T00:59:31.72991653Z, ProjectID: 6858a66a9c500e6d1cbd86ac, Cluster name: test-acc-tf-c-2771065763614226859
2025-06-23T01:49:14.1127808Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1029.46s)
```
### 2025-06-24
#### PASS 20 minutes
```
2025-06-24T02:00:03.6485514Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-24T02:00:03.6518751Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-24T02:00:03.6581923Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-24T02:00:03.6582956Z     pre_check.go:40: Time before creating cluster: 2025-06-24T00:58:37.817631872Z, ProjectID: 6859f78822100658cf268fe0, Cluster name: test-acc-tf-c-6096819561350376849
2025-06-24T02:00:03.6616024Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1205.53s)
```
### 2025-06-25
#### PASS 16 minutes
```
2025-06-25T01:46:02.2039810Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-25T01:46:02.2086000Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-25T01:46:02.2167408Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-25T01:46:02.2168316Z     pre_check.go:40: Time before creating cluster: 2025-06-25T00:57:31.222740924Z, ProjectID: 685b48e14b3ed2215cd7fc83, Cluster name: test-acc-tf-c-5037351401176780521
2025-06-25T01:46:02.2218349Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1014.67s)
```
### 2025-06-26
#### PASS 22 minutes
```
2025-06-26T01:58:04.8011999Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T01:58:04.8053035Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T01:58:04.8115317Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T01:58:04.8116223Z     pre_check.go:40: Time before creating cluster: 2025-06-26T01:03:09.566830964Z, ProjectID: 685c9bcaa6c38f087978a146, Cluster name: test-acc-tf-c-6014074776067817482
2025-06-26T01:58:04.8170194Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1333.87s)
```
#### PASS 16 minutes
```
2025-06-26T05:26:49.4856191Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T05:26:49.4911517Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T05:26:49.4971070Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-26T05:26:49.4971996Z     pre_check.go:40: Time before creating cluster: 2025-06-26T04:40:49.216028413Z, ProjectID: 685ccec927410c4e07ce00a9, Cluster name: test-acc-tf-c-6533826095408094651
2025-06-26T05:26:49.5024212Z --- PASS: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (982.75s)
```