# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 43 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 24 minutes
```
2025-05-28T00:37:41.7127701Z === RUN   TestAccCluster_WithTags
2025-05-28T00:37:41.7280078Z === CONT  TestAccCluster_WithTags
2025-05-28T01:02:17.9708376Z --- PASS: TestAccCluster_WithTags (1476.25s)
```
#### PASS 19 minutes
```
2025-05-28T07:01:07.5099842Z === RUN   TestAccCluster_WithTags
2025-05-28T07:01:07.5191622Z === CONT  TestAccCluster_WithTags
2025-05-28T07:20:31.7895657Z --- PASS: TestAccCluster_WithTags (1164.27s)
```
#### PASS 21 minutes
```
2025-05-28T08:37:00.4365437Z === RUN   TestAccCluster_WithTags
2025-05-28T08:37:00.4404024Z === CONT  TestAccCluster_WithTags
2025-05-28T08:58:12.6142511Z --- PASS: TestAccCluster_WithTags (1272.17s)
```
#### PASS 19 minutes
```
2025-05-28T12:21:41.2557929Z === RUN   TestAccCluster_WithTags
2025-05-28T12:21:41.2658740Z === CONT  TestAccCluster_WithTags
2025-05-28T12:41:21.9310916Z --- PASS: TestAccCluster_WithTags (1180.67s)
```
### 2025-05-29
#### PASS 18 minutes
```
2025-05-29T00:37:34.8180658Z === RUN   TestAccCluster_WithTags
2025-05-29T00:37:34.8263219Z === CONT  TestAccCluster_WithTags
2025-05-29T00:55:42.5267094Z --- PASS: TestAccCluster_WithTags (1087.70s)
```
#### PASS 18 minutes
```
2025-05-29T07:02:38.5192309Z === RUN   TestAccCluster_WithTags
2025-05-29T07:02:38.5376083Z === CONT  TestAccCluster_WithTags
2025-05-29T07:21:11.5869610Z --- PASS: TestAccCluster_WithTags (1113.05s)
```
### 2025-05-30
#### FAIL 3 hours
```
2025-05-30T00:38:02.3136508Z === RUN   TestAccCluster_WithTags
2025-05-30T00:38:02.3169811Z === CONT  TestAccCluster_WithTags
2025-05-30T04:07:12.2250798Z === NAME  TestAccCluster_WithTags
2025-05-30T04:07:12.2251451Z     resource_cluster_test.go:697: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-30T04:07:12.2251930Z         
2025-05-30T04:07:12.2252834Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-5584759647533623139): timeout while waiting for state to become 'DELETED' (last state: 'IDLE', timeout: 3h0m0s)
2025-05-30T04:07:12.2253473Z         
2025-05-30T04:07:12.2253706Z --- FAIL: TestAccCluster_WithTags (12549.91s)
```
#### PASS 18 minutes
```
2025-05-30T07:33:24.1869816Z === RUN   TestAccCluster_WithTags
2025-05-30T07:33:24.1993983Z === CONT  TestAccCluster_WithTags
2025-05-30T07:52:02.9786831Z --- PASS: TestAccCluster_WithTags (1118.78s)
```
### 2025-05-31
#### PASS 18 minutes
```
2025-05-31T00:36:59.0340670Z === RUN   TestAccCluster_WithTags
2025-05-31T00:36:59.0542440Z === CONT  TestAccCluster_WithTags
2025-05-31T00:55:53.0908063Z --- PASS: TestAccCluster_WithTags (1134.04s)
```
### 2025-06-01
#### PASS 19 minutes
```
2025-06-01T00:40:59.9694853Z === RUN   TestAccCluster_WithTags
2025-06-01T00:40:59.9736040Z === CONT  TestAccCluster_WithTags
2025-06-01T01:00:52.1947392Z --- PASS: TestAccCluster_WithTags (1192.22s)
```
#### PASS 18 minutes
```
2025-06-01T04:49:58.9062351Z === RUN   TestAccCluster_WithTags
2025-06-01T04:49:58.9215254Z === CONT  TestAccCluster_WithTags
2025-06-01T05:08:20.2426011Z --- PASS: TestAccCluster_WithTags (1101.33s)
```
#### PASS 19 minutes
```
2025-06-01T08:58:50.9668021Z === RUN   TestAccCluster_WithTags
2025-06-01T08:58:50.9857368Z === CONT  TestAccCluster_WithTags
2025-06-01T09:18:33.6212701Z --- PASS: TestAccCluster_WithTags (1182.64s)
```
#### PASS 16 minutes
```
2025-06-01T13:08:10.4784774Z === RUN   TestAccCluster_WithTags
2025-06-01T13:08:10.4920283Z === CONT  TestAccCluster_WithTags
2025-06-01T13:24:54.2245403Z --- PASS: TestAccCluster_WithTags (1003.72s)
```
#### PASS 18 minutes
```
2025-06-01T17:17:26.9814358Z === RUN   TestAccCluster_WithTags
2025-06-01T17:17:26.9916131Z === CONT  TestAccCluster_WithTags
2025-06-01T17:36:09.4073117Z --- PASS: TestAccCluster_WithTags (1122.42s)
```
#### PASS 18 minutes
```
2025-06-01T21:25:52.2764517Z === RUN   TestAccCluster_WithTags
2025-06-01T21:25:52.2884451Z === CONT  TestAccCluster_WithTags
2025-06-01T21:43:54.5849931Z --- PASS: TestAccCluster_WithTags (1082.30s)
```
### 2025-06-02
#### PASS 19 minutes
```
2025-06-02T00:39:05.2547926Z === RUN   TestAccCluster_WithTags
2025-06-02T00:39:05.2583094Z === CONT  TestAccCluster_WithTags
2025-06-02T00:58:06.5314474Z --- PASS: TestAccCluster_WithTags (1141.27s)
```
#### PASS 18 minutes
```
2025-06-02T01:35:08.1008303Z === RUN   TestAccCluster_WithTags
2025-06-02T01:35:08.1144697Z === CONT  TestAccCluster_WithTags
2025-06-02T01:54:02.7672466Z --- PASS: TestAccCluster_WithTags (1134.65s)
```
#### PASS 18 minutes
```
2025-06-02T05:50:19.9794786Z === RUN   TestAccCluster_WithTags
2025-06-02T05:50:20.0052019Z === CONT  TestAccCluster_WithTags
2025-06-02T06:09:13.5778342Z --- PASS: TestAccCluster_WithTags (1133.59s)
```
### 2025-06-03
#### PASS 18 minutes
```
2025-06-03T00:38:19.2098613Z === RUN   TestAccCluster_WithTags
2025-06-03T00:38:19.2208823Z === CONT  TestAccCluster_WithTags
2025-06-03T00:57:06.4939899Z --- PASS: TestAccCluster_WithTags (1127.27s)
```
### 2025-06-04
#### PASS 20 minutes
```
2025-06-04T00:29:14.8942655Z === RUN   TestAccCluster_WithTags
2025-06-04T00:29:14.9012494Z === CONT  TestAccCluster_WithTags
2025-06-04T00:49:20.6692162Z --- PASS: TestAccCluster_WithTags (1205.77s)
```
### 2025-06-05
#### FAIL 4 seconds
```
2025-06-05T00:28:48.8397434Z === RUN   TestAccCluster_WithTags
2025-06-05T00:28:48.8426588Z === CONT  TestAccCluster_WithTags
2025-06-05T00:28:52.9995078Z === NAME  TestAccCluster_WithTags
2025-06-05T00:28:52.9996009Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:28:52.9996496Z         
2025-06-05T00:28:52.9996919Z         Error: error creating project: test-acc-tf-p-3328145079462133546
2025-06-05T00:28:52.9997269Z         
2025-06-05T00:28:52.9997619Z           with mongodbatlas_project.cluster_project,
2025-06-05T00:28:52.9998399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-05T00:28:52.9999121Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-05T00:28:52.9999527Z         
2025-06-05T00:28:53.0000012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:53.0000774Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:53.0001356Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:53.0433850Z --- FAIL: TestAccCluster_WithTags (4.20s)
```
### 2025-06-06
#### PASS 19 minutes
```
2025-06-06T00:30:08.0274499Z === RUN   TestAccCluster_WithTags
2025-06-06T00:30:08.0332896Z === CONT  TestAccCluster_WithTags
2025-06-06T00:50:00.1463729Z --- PASS: TestAccCluster_WithTags (1192.11s)
```
### 2025-06-07
#### PASS 19 minutes
```
2025-06-07T00:28:50.9571803Z === RUN   TestAccCluster_WithTags
2025-06-07T00:28:50.9787573Z === CONT  TestAccCluster_WithTags
2025-06-07T00:48:24.2356299Z --- PASS: TestAccCluster_WithTags (1173.26s)
```
### 2025-06-08
#### PASS 18 minutes
```
2025-06-08T00:32:05.3372509Z === RUN   TestAccCluster_WithTags
2025-06-08T00:32:05.3405468Z === CONT  TestAccCluster_WithTags
2025-06-08T00:51:05.2896483Z --- PASS: TestAccCluster_WithTags (1139.95s)
```
### 2025-06-09
#### PASS 18 minutes
```
2025-06-09T00:31:03.3409140Z === RUN   TestAccCluster_WithTags
2025-06-09T00:31:03.3592905Z === CONT  TestAccCluster_WithTags
2025-06-09T00:49:57.5235657Z --- PASS: TestAccCluster_WithTags (1134.17s)
```
### 2025-06-10
#### PASS 28 minutes
```
2025-06-10T00:37:45.9205937Z === RUN   TestAccCluster_WithTags
2025-06-10T00:37:45.9506120Z === CONT  TestAccCluster_WithTags
2025-06-10T01:05:54.3519457Z --- PASS: TestAccCluster_WithTags (1688.41s)
```
### 2025-06-11
#### PASS 18 minutes
```
2025-06-11T00:28:47.8933276Z === RUN   TestAccCluster_WithTags
2025-06-11T00:28:47.9059745Z === CONT  TestAccCluster_WithTags
2025-06-11T00:47:25.7480797Z --- PASS: TestAccCluster_WithTags (1117.84s)
```
#### PASS 19 minutes
```
2025-06-11T07:37:17.2587053Z === RUN   TestAccCluster_WithTags
2025-06-11T07:37:17.2757120Z === CONT  TestAccCluster_WithTags
2025-06-11T07:56:39.0491405Z --- PASS: TestAccCluster_WithTags (1161.78s)
```
### 2025-06-12
#### PASS 19 minutes
```
2025-06-12T00:28:32.4302855Z === RUN   TestAccCluster_WithTags
2025-06-12T00:28:32.4344273Z === CONT  TestAccCluster_WithTags
2025-06-12T00:48:13.4907500Z --- PASS: TestAccCluster_WithTags (1181.06s)
```
### 2025-06-13
#### PASS 18 minutes
```
2025-06-13T00:28:34.2486941Z === RUN   TestAccCluster_WithTags
2025-06-13T00:28:34.2792475Z === CONT  TestAccCluster_WithTags
2025-06-13T00:47:13.5466095Z --- PASS: TestAccCluster_WithTags (1119.27s)
```
### 2025-06-14
#### PASS 18 minutes
```
2025-06-14T00:28:01.7693765Z === RUN   TestAccCluster_WithTags
2025-06-14T00:28:01.7780817Z === CONT  TestAccCluster_WithTags
2025-06-14T00:46:33.7732344Z --- PASS: TestAccCluster_WithTags (1112.00s)
```
### 2025-06-15
#### PASS 20 minutes
```
2025-06-15T00:32:00.6349965Z === RUN   TestAccCluster_WithTags
2025-06-15T00:32:00.6392549Z === CONT  TestAccCluster_WithTags
2025-06-15T00:52:21.0645470Z --- PASS: TestAccCluster_WithTags (1220.43s)
```
### 2025-06-16
#### PASS 19 minutes
```
2025-06-16T00:30:04.8249034Z === RUN   TestAccCluster_WithTags
2025-06-16T00:30:04.8290391Z === CONT  TestAccCluster_WithTags
2025-06-16T00:49:58.5778709Z --- PASS: TestAccCluster_WithTags (1193.75s)
```
### 2025-06-17
#### PASS 19 minutes
```
2025-06-17T00:28:58.7261643Z === RUN   TestAccCluster_WithTags
2025-06-17T00:28:58.7381621Z === CONT  TestAccCluster_WithTags
2025-06-17T00:48:49.2491763Z --- PASS: TestAccCluster_WithTags (1190.51s)
```
### 2025-06-18
#### PASS 18 minutes
```
2025-06-18T00:29:04.6890222Z === RUN   TestAccCluster_WithTags
2025-06-18T00:29:04.7036783Z === CONT  TestAccCluster_WithTags
2025-06-18T00:47:30.8129919Z --- PASS: TestAccCluster_WithTags (1106.12s)
```
### 2025-06-19
#### PASS 20 minutes
```
2025-06-19T00:29:21.4757436Z === RUN   TestAccCluster_WithTags
2025-06-19T00:29:21.4895498Z === CONT  TestAccCluster_WithTags
2025-06-19T00:49:38.7117730Z --- PASS: TestAccCluster_WithTags (1217.22s)
```
### 2025-06-20
#### PASS 19 minutes
```
2025-06-20T00:28:46.3471035Z === RUN   TestAccCluster_WithTags
2025-06-20T00:28:46.3512877Z === CONT  TestAccCluster_WithTags
2025-06-20T00:47:52.4374528Z --- PASS: TestAccCluster_WithTags (1146.09s)
```
### 2025-06-21
#### PASS 20 minutes
```
2025-06-21T00:28:37.8538471Z === RUN   TestAccCluster_WithTags
2025-06-21T00:28:37.8573505Z === CONT  TestAccCluster_WithTags
2025-06-21T00:48:44.4195460Z --- PASS: TestAccCluster_WithTags (1206.56s)
```
### 2025-06-22
#### FAIL 19 minutes
```
2025-06-22T00:31:44.8684328Z === RUN   TestAccCluster_WithTags
2025-06-22T00:31:44.8836104Z === CONT  TestAccCluster_WithTags
2025-06-22T00:48:31.2314622Z === NAME  TestAccCluster_WithTags
2025-06-22T00:48:31.2315314Z     resource_cluster_test.go:697: Step 3/3 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:48:31.2315789Z         
2025-06-22T00:48:31.2316285Z         Error: error when getting project properties after create
2025-06-22T00:48:31.2316636Z         
2025-06-22T00:48:31.2317085Z           with mongodbatlas_project.cluster_project,
2025-06-22T00:48:31.2317999Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T00:48:31.2318732Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-06-22T00:48:31.2319071Z         
2025-06-22T00:48:31.2319679Z         error getting project (68574ef2af7a0954e84adf82): error getting project's
2025-06-22T00:48:31.2320279Z         limits (68574ef2af7a0954e84adf82):
2025-06-22T00:48:31.2320868Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef2af7a0954e84adf82/limits
2025-06-22T00:48:31.2321536Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:48:31.2322128Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:48:31.2322537Z         BadRequestDetail: 
2025-06-22T00:51:33.5726114Z --- FAIL: TestAccCluster_WithTags (1188.69s)
```
### 2025-06-23
#### PASS 18 minutes
```
2025-06-23T00:31:00.9003054Z === RUN   TestAccCluster_WithTags
2025-06-23T00:31:00.9082117Z === CONT  TestAccCluster_WithTags
2025-06-23T00:49:33.6676238Z --- PASS: TestAccCluster_WithTags (1112.76s)
```
### 2025-06-24
#### PASS 18 minutes
```
2025-06-24T00:28:56.7758188Z === RUN   TestAccCluster_WithTags
2025-06-24T00:28:56.8113411Z === CONT  TestAccCluster_WithTags
2025-06-24T00:47:38.9275201Z --- PASS: TestAccCluster_WithTags (1122.13s)
```
### 2025-06-25
#### PASS 18 minutes
```
2025-06-25T00:29:14.3237022Z === RUN   TestAccCluster_WithTags
2025-06-25T00:29:14.3372935Z === CONT  TestAccCluster_WithTags
2025-06-25T00:47:46.8745960Z --- PASS: TestAccCluster_WithTags (1112.54s)
```
### 2025-06-26
#### PASS 18 minutes
```
2025-06-26T00:29:15.6687991Z === RUN   TestAccCluster_WithTags
2025-06-26T00:29:15.6725708Z === CONT  TestAccCluster_WithTags
2025-06-26T00:48:06.2303072Z --- PASS: TestAccCluster_WithTags (1130.56s)
```