/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '../../api/baseApi';

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: '/job/', // The endpoint to fetch job data
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        // Assuming response is an array of jobs
        return response.map((job: any) => ({
          title: job.title,
          description: job.description,
          createdBy: job.created_by,
          createdAt: job.created_at,
        }));
      },
    }),
  }),
});

export const { useGetAllJobsQuery } = jobApi;
